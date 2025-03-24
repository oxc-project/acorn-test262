__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 88,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 36,
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 15,
        "name": "Array",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 15,
        "end": 18,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 16,
            "end": 17,
            "name": {
              "type": "Identifier",
              "start": 16,
              "end": 17,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "body": {
        "type": "TSInterfaceBody",
        "start": 19,
        "end": 36,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 25,
            "end": 34,
            "key": {
              "type": "Identifier",
              "start": 25,
              "end": 28,
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 30,
              "end": 33,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 32,
                "end": 33,
                "typeName": {
                  "type": "Identifier",
                  "start": 32,
                  "end": 33,
                  "name": "T",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "accessibility": null,
            "readonly": false,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 38,
      "end": 61,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 42,
          "end": 60,
          "id": {
            "type": "Identifier",
            "start": 42,
            "end": 55,
            "name": "arr",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 45,
              "end": 55,
              "typeAnnotation": {
                "type": "TSArrayType",
                "start": 47,
                "end": 55,
                "elementType": {
                  "type": "TSStringKeyword",
                  "start": 47,
                  "end": 53
                }
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ArrayExpression",
            "start": 58,
            "end": 60,
            "elements": []
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 62,
      "end": 88,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 66,
          "end": 87,
          "id": {
            "type": "Identifier",
            "start": 66,
            "end": 75,
            "name": "x",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 67,
              "end": 75,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 69,
                "end": 75
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 78,
            "end": 87,
            "callee": {
              "type": "MemberExpression",
              "start": 78,
              "end": 85,
              "object": {
                "type": "Identifier",
                "start": 78,
                "end": 81,
                "name": "arr",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 82,
                "end": 85,
                "name": "foo",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "arguments": [],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```

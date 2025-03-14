extendGenericArray.ts
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
      "body": {
        "type": "TSInterfaceBody",
        "start": 19,
        "end": 36,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 25,
            "end": 34,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 25,
              "end": 28,
              "decorators": [],
              "name": "foo",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "params": [],
            "readonly": false,
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
                  "decorators": [],
                  "name": "T",
                  "optional": false
                }
              }
            },
            "static": false
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 15,
        "decorators": [],
        "name": "Array",
        "optional": false
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 15,
        "end": 18,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 16,
            "end": 17,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 16,
              "end": 17,
              "decorators": [],
              "name": "T",
              "optional": false
            },
            "out": false
          }
        ]
      }
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 42,
            "end": 55,
            "decorators": [],
            "name": "arr",
            "optional": false,
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
            }
          },
          "init": {
            "type": "ArrayExpression",
            "start": 58,
            "end": 60,
            "elements": []
          }
        }
      ],
      "declare": false,
      "kind": "var"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 66,
            "end": 75,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 67,
              "end": 75,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 69,
                "end": 75
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "start": 78,
            "end": 87,
            "arguments": [],
            "callee": {
              "type": "MemberExpression",
              "start": 78,
              "end": 85,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 78,
                "end": 81,
                "decorators": [],
                "name": "arr",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 82,
                "end": 85,
                "decorators": [],
                "name": "foo",
                "optional": false
              }
            },
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "var"
    }
  ],
  "sourceType": "script"
}
```

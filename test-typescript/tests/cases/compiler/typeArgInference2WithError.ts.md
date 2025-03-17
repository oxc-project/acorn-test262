__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 126,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 36,
      "body": {
        "type": "TSInterfaceBody",
        "start": 15,
        "end": 36,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 21,
            "end": 34,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 21,
              "end": 25,
              "decorators": [],
              "name": "name",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 25,
              "end": 33,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 27,
                "end": 33
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 14,
        "decorators": [],
        "name": "Item",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 38,
      "end": 92,
      "async": false,
      "body": null,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 55,
        "end": 58,
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 75,
          "end": 80,
          "decorators": [],
          "name": "x",
          "optional": true,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 77,
            "end": 80,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 79,
              "end": 80,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 79,
                "end": 80,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        },
        {
          "type": "Identifier",
          "start": 82,
          "end": 87,
          "decorators": [],
          "name": "y",
          "optional": true,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 84,
            "end": 87,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 86,
              "end": 87,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 86,
                "end": 87,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 88,
        "end": 91,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 90,
          "end": 91,
          "typeArguments": null,
          "typeName": {
            "type": "Identifier",
            "start": 90,
            "end": 91,
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 58,
        "end": 74,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 59,
            "end": 73,
            "const": false,
            "constraint": {
              "type": "TSTypeReference",
              "start": 69,
              "end": 73,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 69,
                "end": 73,
                "decorators": [],
                "name": "Item",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 59,
              "end": 60,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 94,
      "end": 117,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 98,
          "end": 116,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 98,
            "end": 100,
            "decorators": [],
            "name": "z7",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 103,
            "end": 116,
            "arguments": [
              {
                "type": "Literal",
                "start": 107,
                "end": 112,
                "raw": "\"abc\"",
                "value": "abc"
              },
              {
                "type": "Literal",
                "start": 114,
                "end": 115,
                "raw": "5",
                "value": 5
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 103,
              "end": 106,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "var"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```

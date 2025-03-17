__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 225,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 32,
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 29,
        "name": "IHeapObjectProperty",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 30,
        "end": 32,
        "body": []
      },
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 33,
      "end": 172,
      "id": {
        "type": "Identifier",
        "start": 43,
        "end": 61,
        "name": "IDirectChildrenMap",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 62,
        "end": 172,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 73,
            "end": 116,
            "key": {
              "type": "Identifier",
              "start": 73,
              "end": 87,
              "name": "hasOwnProperty",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 88,
                "end": 104,
                "name": "objectId",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 96,
                  "end": 104,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 98,
                    "end": 104
                  }
                },
                "decorators": [],
                "optional": false
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 106,
              "end": 115,
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 108,
                "end": 115
              }
            },
            "accessibility": null,
            "readonly": false,
            "static": false
          },
          {
            "type": "TSIndexSignature",
            "start": 126,
            "end": 169,
            "parameters": [
              {
                "type": "Identifier",
                "start": 127,
                "end": 143,
                "name": "objectId",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 135,
                  "end": 143,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 137,
                    "end": 143
                  }
                },
                "decorators": [],
                "optional": false
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 145,
              "end": 168,
              "typeAnnotation": {
                "type": "TSArrayType",
                "start": 147,
                "end": 168,
                "elementType": {
                  "type": "TSTypeReference",
                  "start": 147,
                  "end": 166,
                  "typeName": {
                    "type": "Identifier",
                    "start": 147,
                    "end": 166,
                    "name": "IHeapObjectProperty",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                }
              }
            },
            "readonly": false,
            "static": false,
            "accessibility": null
          }
        ]
      },
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 177,
      "end": 224,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 181,
          "end": 223,
          "id": {
            "type": "Identifier",
            "start": 181,
            "end": 198,
            "name": "directChildrenMap",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "TSTypeAssertion",
            "start": 201,
            "end": 223,
            "expression": {
              "type": "ObjectExpression",
              "start": 221,
              "end": 223,
              "properties": []
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 202,
              "end": 220,
              "typeName": {
                "type": "Identifier",
                "start": 202,
                "end": 220,
                "name": "IDirectChildrenMap",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
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

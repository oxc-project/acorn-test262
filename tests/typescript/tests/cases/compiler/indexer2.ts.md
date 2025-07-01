__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "IHeapObjectProperty",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 29
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [],
        "start": 30,
        "end": 32
      },
      "declare": false,
      "start": 0,
      "end": 32
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "IDirectChildrenMap",
        "optional": false,
        "typeAnnotation": null,
        "start": 43,
        "end": 61
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "hasOwnProperty",
              "optional": false,
              "typeAnnotation": null,
              "start": 73,
              "end": 87
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "objectId",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 98,
                    "end": 104
                  },
                  "start": 96,
                  "end": 104
                },
                "start": 88,
                "end": 104
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 108,
                "end": 115
              },
              "start": 106,
              "end": 115
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 73,
            "end": 116
          },
          {
            "type": "TSIndexSignature",
            "parameters": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "objectId",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 137,
                    "end": 143
                  },
                  "start": 135,
                  "end": 143
                },
                "start": 127,
                "end": 143
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "IHeapObjectProperty",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 147,
                    "end": 166
                  },
                  "typeArguments": null,
                  "start": 147,
                  "end": 166
                },
                "start": 147,
                "end": 168
              },
              "start": 145,
              "end": 168
            },
            "readonly": false,
            "static": false,
            "accessibility": null,
            "start": 126,
            "end": 169
          }
        ],
        "start": 62,
        "end": 172
      },
      "declare": false,
      "start": 33,
      "end": 172
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "directChildrenMap",
            "optional": false,
            "typeAnnotation": null,
            "start": 181,
            "end": 198
          },
          "init": {
            "type": "TSTypeAssertion",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "IDirectChildrenMap",
                "optional": false,
                "typeAnnotation": null,
                "start": 202,
                "end": 220
              },
              "typeArguments": null,
              "start": 202,
              "end": 220
            },
            "expression": {
              "type": "ObjectExpression",
              "properties": [],
              "start": 221,
              "end": 223
            },
            "start": 201,
            "end": 223
          },
          "definite": false,
          "start": 181,
          "end": 223
        }
      ],
      "declare": false,
      "start": 177,
      "end": 224
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 225
}
```

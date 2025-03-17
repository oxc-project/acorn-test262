__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 154,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 16,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 15,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 15,
            "name": "obj",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 7,
              "end": 15,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 9,
                "end": 15,
                "typeName": {
                  "type": "Identifier",
                  "start": 9,
                  "end": 15,
                  "name": "Object",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "IfStatement",
      "start": 17,
      "end": 154,
      "test": {
        "type": "CallExpression",
        "start": 21,
        "end": 44,
        "callee": {
          "type": "MemberExpression",
          "start": 21,
          "end": 39,
          "object": {
            "type": "Identifier",
            "start": 21,
            "end": 32,
            "name": "ArrayBuffer",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 33,
            "end": 39,
            "name": "isView",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "arguments": [
          {
            "type": "Identifier",
            "start": 40,
            "end": 43,
            "name": "obj",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "consequent": {
        "type": "BlockStatement",
        "start": 46,
        "end": 154,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 122,
            "end": 152,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 126,
                "end": 151,
                "id": {
                  "type": "Identifier",
                  "start": 126,
                  "end": 145,
                  "name": "ab",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 128,
                    "end": 145,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 130,
                      "end": 145,
                      "typeName": {
                        "type": "Identifier",
                        "start": 130,
                        "end": 145,
                        "name": "ArrayBufferView",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  },
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "Identifier",
                  "start": 148,
                  "end": 151,
                  "name": "obj",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          }
        ]
      },
      "alternate": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```

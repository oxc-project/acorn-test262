__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "obj",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Object",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 9,
                  "end": 15
                },
                "typeArguments": null,
                "start": 9,
                "end": 15
              },
              "start": 7,
              "end": 15
            },
            "start": 4,
            "end": 15
          },
          "init": null,
          "definite": false,
          "start": 4,
          "end": 15
        }
      ],
      "declare": false,
      "start": 0,
      "end": 16
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "ArrayBuffer",
            "optional": false,
            "typeAnnotation": null,
            "start": 21,
            "end": 32
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "isView",
            "optional": false,
            "typeAnnotation": null,
            "start": 33,
            "end": 39
          },
          "optional": false,
          "computed": false,
          "start": 21,
          "end": 39
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "obj",
            "optional": false,
            "typeAnnotation": null,
            "start": 40,
            "end": 43
          }
        ],
        "optional": false,
        "start": 21,
        "end": 44
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "VariableDeclaration",
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "ab",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "ArrayBufferView",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 130,
                        "end": 145
                      },
                      "typeArguments": null,
                      "start": 130,
                      "end": 145
                    },
                    "start": 128,
                    "end": 145
                  },
                  "start": 126,
                  "end": 145
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "obj",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 148,
                  "end": 151
                },
                "definite": false,
                "start": 126,
                "end": 151
              }
            ],
            "declare": false,
            "start": 122,
            "end": 152
          }
        ],
        "start": 46,
        "end": 154
      },
      "alternate": null,
      "start": 17,
      "end": 154
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 154
}
```

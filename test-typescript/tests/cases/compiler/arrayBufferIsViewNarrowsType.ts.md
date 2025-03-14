arrayBufferIsViewNarrowsType.ts
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 15,
            "decorators": [],
            "name": "obj",
            "optional": false,
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
                  "decorators": [],
                  "name": "Object",
                  "optional": false
                }
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "IfStatement",
      "start": 17,
      "end": 154,
      "alternate": null,
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
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 126,
                  "end": 145,
                  "decorators": [],
                  "name": "ab",
                  "optional": false,
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
                        "decorators": [],
                        "name": "ArrayBufferView",
                        "optional": false
                      }
                    }
                  }
                },
                "init": {
                  "type": "Identifier",
                  "start": 148,
                  "end": 151,
                  "decorators": [],
                  "name": "obj",
                  "optional": false
                }
              }
            ],
            "declare": false,
            "kind": "var"
          }
        ]
      },
      "test": {
        "type": "CallExpression",
        "start": 21,
        "end": 44,
        "arguments": [
          {
            "type": "Identifier",
            "start": 40,
            "end": 43,
            "decorators": [],
            "name": "obj",
            "optional": false
          }
        ],
        "callee": {
          "type": "MemberExpression",
          "start": 21,
          "end": 39,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 21,
            "end": 32,
            "decorators": [],
            "name": "ArrayBuffer",
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 33,
            "end": 39,
            "decorators": [],
            "name": "isView",
            "optional": false
          }
        },
        "optional": false
      }
    }
  ],
  "sourceType": "script"
}
```

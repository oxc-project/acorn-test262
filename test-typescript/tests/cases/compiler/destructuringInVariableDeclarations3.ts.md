destructuringInVariableDeclarations3.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 58,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 28,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 7,
        "end": 28,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 11,
            "end": 27,
            "definite": false,
            "id": {
              "type": "ObjectPattern",
              "start": 11,
              "end": 23,
              "decorators": [],
              "optional": false,
              "properties": [
                {
                  "type": "Property",
                  "start": 13,
                  "end": 21,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 13,
                    "end": 21,
                    "decorators": [],
                    "name": "toString",
                    "optional": false
                  },
                  "kind": "init",
                  "method": false,
                  "optional": false,
                  "shorthand": true,
                  "value": {
                    "type": "Identifier",
                    "start": 13,
                    "end": 21,
                    "decorators": [],
                    "name": "toString",
                    "optional": false
                  }
                }
              ]
            },
            "init": {
              "type": "Literal",
              "start": 26,
              "end": 27,
              "raw": "1",
              "value": 1
            }
          }
        ],
        "declare": false,
        "kind": "let"
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "BlockStatement",
      "start": 29,
      "end": 57,
      "body": [
        {
          "type": "VariableDeclaration",
          "start": 35,
          "end": 55,
          "declarations": [
            {
              "type": "VariableDeclarator",
              "start": 39,
              "end": 54,
              "definite": false,
              "id": {
                "type": "ObjectPattern",
                "start": 39,
                "end": 50,
                "decorators": [],
                "optional": false,
                "properties": [
                  {
                    "type": "Property",
                    "start": 41,
                    "end": 48,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 41,
                      "end": 48,
                      "decorators": [],
                      "name": "toFixed",
                      "optional": false
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": true,
                    "value": {
                      "type": "Identifier",
                      "start": 41,
                      "end": 48,
                      "decorators": [],
                      "name": "toFixed",
                      "optional": false
                    }
                  }
                ]
              },
              "init": {
                "type": "Literal",
                "start": 53,
                "end": 54,
                "raw": "1",
                "value": 1
              }
            }
          ],
          "declare": false,
          "kind": "let"
        }
      ]
    }
  ],
  "sourceType": "script"
}
```

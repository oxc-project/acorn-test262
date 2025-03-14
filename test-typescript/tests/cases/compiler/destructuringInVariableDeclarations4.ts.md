destructuringInVariableDeclarations4.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 62,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 21,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 20,
          "definite": false,
          "id": {
            "type": "ObjectPattern",
            "start": 4,
            "end": 16,
            "decorators": [],
            "optional": false,
            "properties": [
              {
                "type": "Property",
                "start": 6,
                "end": 14,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 6,
                  "end": 14,
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
                  "start": 6,
                  "end": 14,
                  "decorators": [],
                  "name": "toString",
                  "optional": false
                }
              }
            ]
          },
          "init": {
            "type": "Literal",
            "start": 19,
            "end": 20,
            "raw": "1",
            "value": 1
          }
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "BlockStatement",
      "start": 22,
      "end": 50,
      "body": [
        {
          "type": "VariableDeclaration",
          "start": 28,
          "end": 48,
          "declarations": [
            {
              "type": "VariableDeclarator",
              "start": 32,
              "end": 47,
              "definite": false,
              "id": {
                "type": "ObjectPattern",
                "start": 32,
                "end": 43,
                "decorators": [],
                "optional": false,
                "properties": [
                  {
                    "type": "Property",
                    "start": 34,
                    "end": 41,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 34,
                      "end": 41,
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
                      "start": 34,
                      "end": 41,
                      "decorators": [],
                      "name": "toFixed",
                      "optional": false
                    }
                  }
                ]
              },
              "init": {
                "type": "Literal",
                "start": 46,
                "end": 47,
                "raw": "1",
                "value": 1
              }
            }
          ],
          "declare": false,
          "kind": "let"
        }
      ]
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 51,
      "end": 61,
      "attributes": [],
      "declaration": null,
      "exportKind": "value",
      "source": null,
      "specifiers": []
    }
  ],
  "sourceType": "script"
}
```

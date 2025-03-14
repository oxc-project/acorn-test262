jsxFragReactReferenceErrors.tsx
```json
{
  "type": "Program",
  "start": 103,
  "end": 150,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 103,
      "end": 150,
      "attributes": [],
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 110,
        "end": 150,
        "async": false,
        "body": {
          "type": "BlockStatement",
          "start": 130,
          "end": 150,
          "body": [
            {
              "type": "ReturnStatement",
              "start": 133,
              "end": 148,
              "argument": {
                "type": "JSXFragment",
                "start": 140,
                "end": 148,
                "children": [
                  {
                    "type": "JSXText",
                    "start": 142,
                    "end": 145,
                    "raw": "\n  ",
                    "value": "\n  "
                  }
                ],
                "closingFragment": {
                  "type": "JSXClosingFragment",
                  "start": 145,
                  "end": 148
                },
                "openingFragment": {
                  "type": "JSXOpeningFragment",
                  "start": 140,
                  "end": 142
                }
              }
            }
          ]
        },
        "declare": false,
        "expression": false,
        "generator": false,
        "id": {
          "type": "Identifier",
          "start": 119,
          "end": 128,
          "decorators": [],
          "name": "Component",
          "optional": false
        },
        "params": []
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    }
  ],
  "sourceType": "script"
}
```

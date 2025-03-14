copyrightWithoutNewLine1.ts
```json
{
  "type": "Program",
  "start": 89,
  "end": 237,
  "body": [
    {
      "type": "TSImportEqualsDeclaration",
      "start": 89,
      "end": 124,
      "id": {
        "type": "Identifier",
        "start": 96,
        "end": 101,
        "decorators": [],
        "name": "model",
        "optional": false
      },
      "importKind": "value",
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "start": 104,
        "end": 124,
        "expression": {
          "type": "Literal",
          "start": 112,
          "end": 123,
          "raw": "\"./greeter\"",
          "value": "./greeter"
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 125,
      "end": 169,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 129,
          "end": 168,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 129,
            "end": 131,
            "decorators": [],
            "name": "el",
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 134,
            "end": 168,
            "arguments": [
              {
                "type": "Literal",
                "start": 158,
                "end": 167,
                "raw": "'content'",
                "value": "content"
              }
            ],
            "callee": {
              "type": "MemberExpression",
              "start": 134,
              "end": 157,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 134,
                "end": 142,
                "decorators": [],
                "name": "document",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 143,
                "end": 157,
                "decorators": [],
                "name": "getElementById",
                "optional": false
              }
            },
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 170,
      "end": 206,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 174,
          "end": 205,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 174,
            "end": 181,
            "decorators": [],
            "name": "greeter",
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 184,
            "end": 205,
            "arguments": [
              {
                "type": "Identifier",
                "start": 202,
                "end": 204,
                "decorators": [],
                "name": "el",
                "optional": false
              }
            ],
            "callee": {
              "type": "MemberExpression",
              "start": 188,
              "end": 201,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 188,
                "end": 193,
                "decorators": [],
                "name": "model",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 194,
                "end": 201,
                "decorators": [],
                "name": "Greeter",
                "optional": false
              }
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ExpressionStatement",
      "start": 221,
      "end": 237,
      "expression": {
        "type": "CallExpression",
        "start": 221,
        "end": 236,
        "arguments": [],
        "callee": {
          "type": "MemberExpression",
          "start": 221,
          "end": 234,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 221,
            "end": 228,
            "decorators": [],
            "name": "greeter",
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 229,
            "end": 234,
            "decorators": [],
            "name": "start",
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

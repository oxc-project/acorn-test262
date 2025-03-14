__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 90,
  "end": 238,
  "body": [
    {
      "type": "TSImportEqualsDeclaration",
      "start": 90,
      "end": 125,
      "id": {
        "type": "Identifier",
        "start": 97,
        "end": 102,
        "decorators": [],
        "name": "model",
        "optional": false
      },
      "importKind": "value",
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "start": 105,
        "end": 125,
        "expression": {
          "type": "Literal",
          "start": 113,
          "end": 124,
          "raw": "\"./greeter\"",
          "value": "./greeter"
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 126,
      "end": 170,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 130,
          "end": 169,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 130,
            "end": 132,
            "decorators": [],
            "name": "el",
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 135,
            "end": 169,
            "arguments": [
              {
                "type": "Literal",
                "start": 159,
                "end": 168,
                "raw": "'content'",
                "value": "content"
              }
            ],
            "callee": {
              "type": "MemberExpression",
              "start": 135,
              "end": 158,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 135,
                "end": 143,
                "decorators": [],
                "name": "document",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 144,
                "end": 158,
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
      "start": 171,
      "end": 207,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 175,
          "end": 206,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 175,
            "end": 182,
            "decorators": [],
            "name": "greeter",
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 185,
            "end": 206,
            "arguments": [
              {
                "type": "Identifier",
                "start": 203,
                "end": 205,
                "decorators": [],
                "name": "el",
                "optional": false
              }
            ],
            "callee": {
              "type": "MemberExpression",
              "start": 189,
              "end": 202,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 189,
                "end": 194,
                "decorators": [],
                "name": "model",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 195,
                "end": 202,
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
      "start": 222,
      "end": 238,
      "expression": {
        "type": "CallExpression",
        "start": 222,
        "end": 237,
        "arguments": [],
        "callee": {
          "type": "MemberExpression",
          "start": 222,
          "end": 235,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 222,
            "end": 229,
            "decorators": [],
            "name": "greeter",
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 230,
            "end": 235,
            "decorators": [],
            "name": "start",
            "optional": false
          }
        },
        "optional": false
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```

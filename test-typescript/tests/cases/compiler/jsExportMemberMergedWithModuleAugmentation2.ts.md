__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 96,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 27,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 18,
        "end": 26,
        "raw": "\"./test\"",
        "value": "./test"
      },
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 9,
          "end": 10,
          "imported": {
            "type": "Identifier",
            "start": 9,
            "end": 10,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "start": 9,
            "end": 10,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ]
    },
    {
      "type": "TSModuleDeclaration",
      "start": 29,
      "end": 82,
      "kind": "module",
      "body": {
        "type": "TSModuleBlock",
        "start": 53,
        "end": 82,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 57,
            "end": 80,
            "attributes": [],
            "declaration": {
              "type": "VariableDeclaration",
              "start": 64,
              "end": 80,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 70,
                  "end": 79,
                  "definite": false,
                  "id": {
                    "type": "Identifier",
                    "start": 70,
                    "end": 79,
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 71,
                      "end": 79,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 73,
                        "end": 79
                      }
                    }
                  },
                  "init": null
                }
              ],
              "declare": false,
              "kind": "const"
            },
            "exportKind": "value",
            "source": null,
            "specifiers": []
          }
        ]
      },
      "declare": true,
      "global": false,
      "id": {
        "type": "Literal",
        "start": 44,
        "end": 52,
        "raw": "\"./test\"",
        "value": "./test"
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 84,
      "end": 96,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 84,
        "end": 95,
        "arguments": [],
        "callee": {
          "type": "MemberExpression",
          "start": 84,
          "end": 93,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 84,
            "end": 85,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 86,
            "end": 93,
            "decorators": [],
            "name": "toFixed",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "optional": false,
        "typeArguments": null
      }
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```

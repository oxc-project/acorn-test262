__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 97,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 27,
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 9,
          "end": 10,
          "imported": {
            "type": "Identifier",
            "start": 9,
            "end": 10,
            "name": "a",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "local": {
            "type": "Identifier",
            "start": 9,
            "end": 10,
            "name": "a",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "importKind": "value"
        }
      ],
      "source": {
        "type": "Literal",
        "start": 18,
        "end": 26,
        "value": "./test",
        "raw": "\"./test\""
      },
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "TSModuleDeclaration",
      "start": 29,
      "end": 82,
      "id": {
        "type": "Literal",
        "start": 44,
        "end": 52,
        "value": "./test",
        "raw": "\"./test\""
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 53,
        "end": 82,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 57,
            "end": 80,
            "declaration": {
              "type": "VariableDeclaration",
              "start": 64,
              "end": 80,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 70,
                  "end": 79,
                  "id": {
                    "type": "Identifier",
                    "start": 70,
                    "end": 79,
                    "name": "a",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 71,
                      "end": 79,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 73,
                        "end": 79
                      }
                    },
                    "decorators": [],
                    "optional": false
                  },
                  "init": null,
                  "definite": false
                }
              ],
              "kind": "const",
              "declare": false
            },
            "specifiers": [],
            "source": null,
            "attributes": [],
            "exportKind": "value"
          }
        ]
      },
      "kind": "module",
      "declare": true,
      "global": false
    },
    {
      "type": "ExpressionStatement",
      "start": 84,
      "end": 96,
      "expression": {
        "type": "CallExpression",
        "start": 84,
        "end": 95,
        "callee": {
          "type": "MemberExpression",
          "start": 84,
          "end": 93,
          "object": {
            "type": "Identifier",
            "start": 84,
            "end": 85,
            "name": "a",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 86,
            "end": 93,
            "name": "toFixed",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "arguments": [],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```

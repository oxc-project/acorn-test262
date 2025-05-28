__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 32,
  "body": [
    {
      "type": "ExpressionStatement",
      "start": 0,
      "end": 31,
      "expression": {
        "type": "AssignmentExpression",
        "start": 0,
        "end": 30,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 0,
          "end": 14,
          "object": {
            "type": "Identifier",
            "start": 0,
            "end": 6,
            "decorators": [],
            "name": "module",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 7,
            "end": 14,
            "decorators": [],
            "name": "exports",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "right": {
          "type": "ObjectExpression",
          "start": 17,
          "end": 30,
          "properties": [
            {
              "type": "Property",
              "start": 21,
              "end": 28,
              "kind": "init",
              "key": {
                "type": "Identifier",
                "start": 21,
                "end": 22,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null
              },
              "value": {
                "type": "Literal",
                "start": 24,
                "end": 28,
                "value": "ok",
                "raw": "\"ok\""
              },
              "method": false,
              "shorthand": false,
              "computed": false,
              "optional": false
            }
          ]
        }
      },
      "directive": null
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
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
          "local": {
            "type": "Identifier",
            "start": 9,
            "end": 10,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null
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
      "phase": null,
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
              "kind": "const",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 70,
                  "end": 79,
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
                  "init": null,
                  "definite": false
                }
              ],
              "declare": false
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": []
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
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 86,
            "end": 93,
            "decorators": [],
            "name": "toFixed",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false
      },
      "directive": null
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```

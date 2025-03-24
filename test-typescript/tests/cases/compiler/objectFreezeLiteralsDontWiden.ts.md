__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 195,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 91,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 6,
          "end": 90,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 6,
            "end": 25,
            "decorators": [],
            "name": "PUPPETEER_REVISIONS",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 28,
            "end": 90,
            "arguments": [
              {
                "type": "ObjectExpression",
                "start": 42,
                "end": 89,
                "properties": [
                  {
                    "type": "Property",
                    "start": 46,
                    "end": 65,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 46,
                      "end": 54,
                      "decorators": [],
                      "name": "chromium",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "Literal",
                      "start": 56,
                      "end": 65,
                      "raw": "'1011831'",
                      "value": "1011831"
                    }
                  },
                  {
                    "type": "Property",
                    "start": 69,
                    "end": 86,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 69,
                      "end": 76,
                      "decorators": [],
                      "name": "firefox",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "Literal",
                      "start": 78,
                      "end": 86,
                      "raw": "'latest'",
                      "value": "latest"
                    }
                  }
                ]
              }
            ],
            "callee": {
              "type": "MemberExpression",
              "start": 28,
              "end": 41,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 28,
                "end": 34,
                "decorators": [],
                "name": "Object",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 35,
                "end": 41,
                "decorators": [],
                "name": "freeze",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 93,
      "end": 146,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 97,
          "end": 145,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 97,
            "end": 114,
            "decorators": [],
            "name": "preferredRevision",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "MemberExpression",
            "start": 117,
            "end": 145,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 117,
              "end": 136,
              "decorators": [],
              "name": "PUPPETEER_REVISIONS",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 137,
              "end": 145,
              "decorators": [],
              "name": "chromium",
              "optional": false,
              "typeAnnotation": null
            }
          }
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "ExpressionStatement",
      "start": 147,
      "end": 195,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 147,
        "end": 194,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 147,
          "end": 164,
          "decorators": [],
          "name": "preferredRevision",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "MemberExpression",
          "start": 167,
          "end": 194,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 167,
            "end": 186,
            "decorators": [],
            "name": "PUPPETEER_REVISIONS",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 187,
            "end": 194,
            "decorators": [],
            "name": "firefox",
            "optional": false,
            "typeAnnotation": null
          }
        }
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```

__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 196,
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
          "id": {
            "type": "Identifier",
            "start": 6,
            "end": 25,
            "name": "PUPPETEER_REVISIONS",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 28,
            "end": 90,
            "callee": {
              "type": "MemberExpression",
              "start": 28,
              "end": 41,
              "object": {
                "type": "Identifier",
                "start": 28,
                "end": 34,
                "name": "Object",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 35,
                "end": 41,
                "name": "freeze",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
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
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 46,
                      "end": 54,
                      "name": "chromium",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "Literal",
                      "start": 56,
                      "end": 65,
                      "value": "1011831",
                      "raw": "'1011831'"
                    },
                    "kind": "init",
                    "optional": false
                  },
                  {
                    "type": "Property",
                    "start": 69,
                    "end": 86,
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 69,
                      "end": 76,
                      "name": "firefox",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "Literal",
                      "start": 78,
                      "end": 86,
                      "value": "latest",
                      "raw": "'latest'"
                    },
                    "kind": "init",
                    "optional": false
                  }
                ]
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 97,
            "end": 114,
            "name": "preferredRevision",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 117,
            "end": 145,
            "object": {
              "type": "Identifier",
              "start": 117,
              "end": 136,
              "name": "PUPPETEER_REVISIONS",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 137,
              "end": 145,
              "name": "chromium",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false
          },
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 147,
      "end": 195,
      "expression": {
        "type": "AssignmentExpression",
        "start": 147,
        "end": 194,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 147,
          "end": 164,
          "name": "preferredRevision",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "MemberExpression",
          "start": 167,
          "end": 194,
          "object": {
            "type": "Identifier",
            "start": 167,
            "end": 186,
            "name": "PUPPETEER_REVISIONS",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 187,
            "end": 194,
            "name": "firefox",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        }
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```

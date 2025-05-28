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
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 6,
          "end": 90,
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
            "callee": {
              "type": "MemberExpression",
              "start": 28,
              "end": 41,
              "object": {
                "type": "Identifier",
                "start": 28,
                "end": 34,
                "decorators": [],
                "name": "Object",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 35,
                "end": 41,
                "decorators": [],
                "name": "freeze",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "typeArguments": null,
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
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "start": 46,
                      "end": 54,
                      "decorators": [],
                      "name": "chromium",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "value": {
                      "type": "Literal",
                      "start": 56,
                      "end": 65,
                      "value": "1011831",
                      "raw": "'1011831'"
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false
                  },
                  {
                    "type": "Property",
                    "start": 69,
                    "end": 86,
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "start": 69,
                      "end": 76,
                      "decorators": [],
                      "name": "firefox",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "value": {
                      "type": "Literal",
                      "start": 78,
                      "end": 86,
                      "value": "latest",
                      "raw": "'latest'"
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false
                  }
                ]
              }
            ],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 93,
      "end": 146,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 97,
          "end": 145,
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
            "object": {
              "type": "Identifier",
              "start": 117,
              "end": 136,
              "decorators": [],
              "name": "PUPPETEER_REVISIONS",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Identifier",
              "start": 137,
              "end": 145,
              "decorators": [],
              "name": "chromium",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "computed": false
          },
          "definite": false
        }
      ],
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
          "decorators": [],
          "name": "preferredRevision",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "MemberExpression",
          "start": 167,
          "end": 194,
          "object": {
            "type": "Identifier",
            "start": 167,
            "end": 186,
            "decorators": [],
            "name": "PUPPETEER_REVISIONS",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 187,
            "end": 194,
            "decorators": [],
            "name": "firefox",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        }
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```

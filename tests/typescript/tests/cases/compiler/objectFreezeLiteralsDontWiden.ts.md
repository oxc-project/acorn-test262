__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "PUPPETEER_REVISIONS",
            "optional": false,
            "typeAnnotation": null,
            "start": 6,
            "end": 25
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "Object",
                "optional": false,
                "typeAnnotation": null,
                "start": 28,
                "end": 34
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "freeze",
                "optional": false,
                "typeAnnotation": null,
                "start": 35,
                "end": 41
              },
              "optional": false,
              "computed": false,
              "start": 28,
              "end": 41
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ObjectExpression",
                "properties": [
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "chromium",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 46,
                      "end": 54
                    },
                    "value": {
                      "type": "Literal",
                      "value": "1011831",
                      "raw": "'1011831'",
                      "start": 56,
                      "end": 65
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 46,
                    "end": 65
                  },
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "firefox",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 69,
                      "end": 76
                    },
                    "value": {
                      "type": "Literal",
                      "value": "latest",
                      "raw": "'latest'",
                      "start": 78,
                      "end": 86
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 69,
                    "end": 86
                  }
                ],
                "start": 42,
                "end": 89
              }
            ],
            "optional": false,
            "start": 28,
            "end": 90
          },
          "definite": false,
          "start": 6,
          "end": 90
        }
      ],
      "declare": false,
      "start": 0,
      "end": 91
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "preferredRevision",
            "optional": false,
            "typeAnnotation": null,
            "start": 97,
            "end": 114
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "PUPPETEER_REVISIONS",
              "optional": false,
              "typeAnnotation": null,
              "start": 117,
              "end": 136
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "chromium",
              "optional": false,
              "typeAnnotation": null,
              "start": 137,
              "end": 145
            },
            "optional": false,
            "computed": false,
            "start": 117,
            "end": 145
          },
          "definite": false,
          "start": 97,
          "end": 145
        }
      ],
      "declare": false,
      "start": 93,
      "end": 146
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "preferredRevision",
          "optional": false,
          "typeAnnotation": null,
          "start": 147,
          "end": 164
        },
        "right": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "PUPPETEER_REVISIONS",
            "optional": false,
            "typeAnnotation": null,
            "start": 167,
            "end": 186
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "firefox",
            "optional": false,
            "typeAnnotation": null,
            "start": 187,
            "end": 194
          },
          "optional": false,
          "computed": false,
          "start": 167,
          "end": 194
        },
        "start": 147,
        "end": 194
      },
      "directive": null,
      "start": 147,
      "end": 195
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 195
}
```

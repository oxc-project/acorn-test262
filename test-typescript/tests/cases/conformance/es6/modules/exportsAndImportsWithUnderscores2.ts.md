__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 78,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 10,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 10,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 10,
            "decorators": [],
            "name": "R",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 5,
              "end": 10,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 7,
                "end": 10
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ExportDefaultDeclaration",
      "start": 11,
      "end": 77,
      "declaration": {
        "type": "AssignmentExpression",
        "start": 26,
        "end": 77,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 26,
          "end": 27,
          "decorators": [],
          "name": "R",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "ObjectExpression",
          "start": 30,
          "end": 77,
          "properties": [
            {
              "type": "Property",
              "start": 36,
              "end": 54,
              "computed": false,
              "key": {
                "type": "Literal",
                "start": 36,
                "end": 48,
                "raw": "\"__esmodule\"",
                "value": "__esmodule"
              },
              "kind": "init",
              "method": false,
              "optional": false,
              "shorthand": false,
              "value": {
                "type": "Literal",
                "start": 50,
                "end": 54,
                "raw": "true",
                "value": true
              }
            },
            {
              "type": "Property",
              "start": 60,
              "end": 75,
              "computed": false,
              "key": {
                "type": "Literal",
                "start": 60,
                "end": 71,
                "raw": "\"__proto__\"",
                "value": "__proto__"
              },
              "kind": "init",
              "method": false,
              "optional": false,
              "shorthand": false,
              "value": {
                "type": "ObjectExpression",
                "start": 73,
                "end": 75,
                "properties": []
              }
            }
          ]
        }
      },
      "exportKind": "value"
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
  "end": 58,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 21,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 14,
        "end": 20,
        "raw": "\"./m1\"",
        "value": "./m1"
      },
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "start": 7,
          "end": 8,
          "local": {
            "type": "Identifier",
            "start": 7,
            "end": 8,
            "decorators": [],
            "name": "R",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ]
    },
    {
      "type": "VariableDeclaration",
      "start": 22,
      "end": 58,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 28,
          "end": 57,
          "definite": false,
          "id": {
            "type": "ObjectPattern",
            "start": 28,
            "end": 53,
            "decorators": [],
            "optional": false,
            "properties": [
              {
                "type": "Property",
                "start": 30,
                "end": 40,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 30,
                  "end": 40,
                  "decorators": [],
                  "name": "__esmodule",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": true,
                "value": {
                  "type": "Identifier",
                  "start": 30,
                  "end": 40,
                  "decorators": [],
                  "name": "__esmodule",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              {
                "type": "Property",
                "start": 42,
                "end": 51,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 42,
                  "end": 51,
                  "decorators": [],
                  "name": "__proto__",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": true,
                "value": {
                  "type": "Identifier",
                  "start": 42,
                  "end": 51,
                  "decorators": [],
                  "name": "__proto__",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            ],
            "typeAnnotation": null
          },
          "init": {
            "type": "Identifier",
            "start": 56,
            "end": 57,
            "decorators": [],
            "name": "R",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```

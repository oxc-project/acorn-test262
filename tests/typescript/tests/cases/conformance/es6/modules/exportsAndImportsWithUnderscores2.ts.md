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
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 10,
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
          "init": null,
          "definite": false
        }
      ],
      "declare": false
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
              "kind": "init",
              "key": {
                "type": "Literal",
                "start": 36,
                "end": 48,
                "value": "__esmodule",
                "raw": "\"__esmodule\""
              },
              "value": {
                "type": "Literal",
                "start": 50,
                "end": 54,
                "value": true,
                "raw": "true"
              },
              "method": false,
              "shorthand": false,
              "computed": false,
              "optional": false
            },
            {
              "type": "Property",
              "start": 60,
              "end": 75,
              "kind": "init",
              "key": {
                "type": "Literal",
                "start": 60,
                "end": 71,
                "value": "__proto__",
                "raw": "\"__proto__\""
              },
              "value": {
                "type": "ObjectExpression",
                "start": 73,
                "end": 75,
                "properties": []
              },
              "method": false,
              "shorthand": false,
              "computed": false,
              "optional": false
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
      ],
      "source": {
        "type": "Literal",
        "start": 14,
        "end": 20,
        "value": "./m1",
        "raw": "\"./m1\""
      },
      "phase": null,
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "VariableDeclaration",
      "start": 22,
      "end": 58,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 28,
          "end": 57,
          "id": {
            "type": "ObjectPattern",
            "start": 28,
            "end": 53,
            "decorators": [],
            "properties": [
              {
                "type": "Property",
                "start": 30,
                "end": 40,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 30,
                  "end": 40,
                  "decorators": [],
                  "name": "__esmodule",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "Identifier",
                  "start": 30,
                  "end": 40,
                  "decorators": [],
                  "name": "__esmodule",
                  "optional": false,
                  "typeAnnotation": null
                },
                "method": false,
                "shorthand": true,
                "computed": false,
                "optional": false
              },
              {
                "type": "Property",
                "start": 42,
                "end": 51,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 42,
                  "end": 51,
                  "decorators": [],
                  "name": "__proto__",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "Identifier",
                  "start": 42,
                  "end": 51,
                  "decorators": [],
                  "name": "__proto__",
                  "optional": false,
                  "typeAnnotation": null
                },
                "method": false,
                "shorthand": true,
                "computed": false,
                "optional": false
              }
            ],
            "optional": false,
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
          },
          "definite": false
        }
      ],
      "declare": false
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```

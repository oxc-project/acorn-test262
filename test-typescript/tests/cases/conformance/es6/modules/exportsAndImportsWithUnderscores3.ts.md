__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 84,
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
      "end": 83,
      "declaration": {
        "type": "AssignmentExpression",
        "start": 26,
        "end": 83,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 26,
          "end": 27,
          "decorators": [],
          "name": "R",
          "optional": false
        },
        "right": {
          "type": "ObjectExpression",
          "start": 30,
          "end": 83,
          "properties": [
            {
              "type": "Property",
              "start": 36,
              "end": 45,
              "computed": false,
              "key": {
                "type": "Literal",
                "start": 36,
                "end": 41,
                "raw": "\"___\"",
                "value": "___"
              },
              "kind": "init",
              "method": false,
              "optional": false,
              "shorthand": false,
              "value": {
                "type": "Literal",
                "start": 43,
                "end": 45,
                "raw": "30",
                "value": 30
              }
            },
            {
              "type": "Property",
              "start": 51,
              "end": 65,
              "computed": false,
              "key": {
                "type": "Literal",
                "start": 51,
                "end": 61,
                "raw": "\"___hello\"",
                "value": "___hello"
              },
              "kind": "init",
              "method": false,
              "optional": false,
              "shorthand": false,
              "value": {
                "type": "Literal",
                "start": 63,
                "end": 65,
                "raw": "21",
                "value": 21
              }
            },
            {
              "type": "Property",
              "start": 71,
              "end": 80,
              "computed": false,
              "key": {
                "type": "Literal",
                "start": 71,
                "end": 76,
                "raw": "\"_hi\"",
                "value": "_hi"
              },
              "kind": "init",
              "method": false,
              "optional": false,
              "shorthand": false,
              "value": {
                "type": "Literal",
                "start": 78,
                "end": 80,
                "raw": "40",
                "value": 40
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
  "end": 56,
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
            "optional": false
          }
        }
      ]
    },
    {
      "type": "VariableDeclaration",
      "start": 22,
      "end": 55,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 28,
          "end": 54,
          "definite": false,
          "id": {
            "type": "ObjectPattern",
            "start": 28,
            "end": 50,
            "decorators": [],
            "optional": false,
            "properties": [
              {
                "type": "Property",
                "start": 30,
                "end": 33,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 30,
                  "end": 33,
                  "decorators": [],
                  "name": "___",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": true,
                "value": {
                  "type": "Identifier",
                  "start": 30,
                  "end": 33,
                  "decorators": [],
                  "name": "___",
                  "optional": false
                }
              },
              {
                "type": "Property",
                "start": 35,
                "end": 43,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 35,
                  "end": 43,
                  "decorators": [],
                  "name": "___hello",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": true,
                "value": {
                  "type": "Identifier",
                  "start": 35,
                  "end": 43,
                  "decorators": [],
                  "name": "___hello",
                  "optional": false
                }
              },
              {
                "type": "Property",
                "start": 45,
                "end": 48,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 45,
                  "end": 48,
                  "decorators": [],
                  "name": "_hi",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": true,
                "value": {
                  "type": "Identifier",
                  "start": 45,
                  "end": 48,
                  "decorators": [],
                  "name": "_hi",
                  "optional": false
                }
              }
            ]
          },
          "init": {
            "type": "Identifier",
            "start": 53,
            "end": 54,
            "decorators": [],
            "name": "R",
            "optional": false
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

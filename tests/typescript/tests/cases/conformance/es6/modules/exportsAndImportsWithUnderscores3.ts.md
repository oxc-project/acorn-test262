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
          "optional": false,
          "typeAnnotation": null
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
              "kind": "init",
              "key": {
                "type": "Literal",
                "start": 36,
                "end": 41,
                "value": "___",
                "raw": "\"___\""
              },
              "value": {
                "type": "Literal",
                "start": 43,
                "end": 45,
                "value": 30,
                "raw": "30"
              },
              "method": false,
              "shorthand": false,
              "computed": false,
              "optional": false
            },
            {
              "type": "Property",
              "start": 51,
              "end": 65,
              "kind": "init",
              "key": {
                "type": "Literal",
                "start": 51,
                "end": 61,
                "value": "___hello",
                "raw": "\"___hello\""
              },
              "value": {
                "type": "Literal",
                "start": 63,
                "end": 65,
                "value": 21,
                "raw": "21"
              },
              "method": false,
              "shorthand": false,
              "computed": false,
              "optional": false
            },
            {
              "type": "Property",
              "start": 71,
              "end": 80,
              "kind": "init",
              "key": {
                "type": "Literal",
                "start": 71,
                "end": 76,
                "value": "_hi",
                "raw": "\"_hi\""
              },
              "value": {
                "type": "Literal",
                "start": 78,
                "end": 80,
                "value": 40,
                "raw": "40"
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
  "end": 55,
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
      "end": 55,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 28,
          "end": 54,
          "id": {
            "type": "ObjectPattern",
            "start": 28,
            "end": 50,
            "decorators": [],
            "properties": [
              {
                "type": "Property",
                "start": 30,
                "end": 33,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 30,
                  "end": 33,
                  "decorators": [],
                  "name": "___",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "Identifier",
                  "start": 30,
                  "end": 33,
                  "decorators": [],
                  "name": "___",
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
                "start": 35,
                "end": 43,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 35,
                  "end": 43,
                  "decorators": [],
                  "name": "___hello",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "Identifier",
                  "start": 35,
                  "end": 43,
                  "decorators": [],
                  "name": "___hello",
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
                "start": 45,
                "end": 48,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 45,
                  "end": 48,
                  "decorators": [],
                  "name": "_hi",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "Identifier",
                  "start": 45,
                  "end": 48,
                  "decorators": [],
                  "name": "_hi",
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
            "start": 53,
            "end": 54,
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

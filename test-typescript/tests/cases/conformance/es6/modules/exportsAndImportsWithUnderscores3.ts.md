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
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 10,
            "name": "R",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 5,
              "end": 10,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 7,
                "end": 10
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
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
          "name": "R",
          "typeAnnotation": null,
          "decorators": [],
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
              "method": false,
              "shorthand": false,
              "computed": false,
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
              "kind": "init",
              "optional": false
            },
            {
              "type": "Property",
              "start": 51,
              "end": 65,
              "method": false,
              "shorthand": false,
              "computed": false,
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
              "kind": "init",
              "optional": false
            },
            {
              "type": "Property",
              "start": 71,
              "end": 80,
              "method": false,
              "shorthand": false,
              "computed": false,
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
              "kind": "init",
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
  "end": 56,
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
            "name": "R",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
      "attributes": [],
      "importKind": "value"
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
          "id": {
            "type": "ObjectPattern",
            "start": 28,
            "end": 50,
            "properties": [
              {
                "type": "Property",
                "start": 30,
                "end": 33,
                "method": false,
                "shorthand": true,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 30,
                  "end": 33,
                  "name": "___",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Identifier",
                  "start": 30,
                  "end": 33,
                  "name": "___",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "kind": "init",
                "optional": false
              },
              {
                "type": "Property",
                "start": 35,
                "end": 43,
                "method": false,
                "shorthand": true,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 35,
                  "end": 43,
                  "name": "___hello",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Identifier",
                  "start": 35,
                  "end": 43,
                  "name": "___hello",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "kind": "init",
                "optional": false
              },
              {
                "type": "Property",
                "start": 45,
                "end": 48,
                "method": false,
                "shorthand": true,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 45,
                  "end": 48,
                  "name": "_hi",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Identifier",
                  "start": 45,
                  "end": 48,
                  "name": "_hi",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "kind": "init",
                "optional": false
              }
            ],
            "decorators": [],
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "Identifier",
            "start": 53,
            "end": 54,
            "name": "R",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```

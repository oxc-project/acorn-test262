__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "R",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 7,
                "end": 10
              },
              "start": 5,
              "end": 10
            },
            "start": 4,
            "end": 10
          },
          "init": null,
          "definite": false,
          "start": 4,
          "end": 10
        }
      ],
      "declare": false,
      "start": 0,
      "end": 10
    },
    {
      "type": "ExportDefaultDeclaration",
      "declaration": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "R",
          "optional": false,
          "typeAnnotation": null,
          "start": 26,
          "end": 27
        },
        "right": {
          "type": "ObjectExpression",
          "properties": [
            {
              "type": "Property",
              "kind": "init",
              "key": {
                "type": "Literal",
                "value": "___",
                "raw": "\"___\"",
                "start": 36,
                "end": 41
              },
              "value": {
                "type": "Literal",
                "value": 30,
                "raw": "30",
                "start": 43,
                "end": 45
              },
              "method": false,
              "shorthand": false,
              "computed": false,
              "optional": false,
              "start": 36,
              "end": 45
            },
            {
              "type": "Property",
              "kind": "init",
              "key": {
                "type": "Literal",
                "value": "___hello",
                "raw": "\"___hello\"",
                "start": 51,
                "end": 61
              },
              "value": {
                "type": "Literal",
                "value": 21,
                "raw": "21",
                "start": 63,
                "end": 65
              },
              "method": false,
              "shorthand": false,
              "computed": false,
              "optional": false,
              "start": 51,
              "end": 65
            },
            {
              "type": "Property",
              "kind": "init",
              "key": {
                "type": "Literal",
                "value": "_hi",
                "raw": "\"_hi\"",
                "start": 71,
                "end": 76
              },
              "value": {
                "type": "Literal",
                "value": 40,
                "raw": "40",
                "start": 78,
                "end": 80
              },
              "method": false,
              "shorthand": false,
              "computed": false,
              "optional": false,
              "start": 71,
              "end": 80
            }
          ],
          "start": 30,
          "end": 83
        },
        "start": 26,
        "end": 83
      },
      "exportKind": "value",
      "start": 11,
      "end": 83
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 84
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "R",
            "optional": false,
            "typeAnnotation": null,
            "start": 7,
            "end": 8
          },
          "start": 7,
          "end": 8
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./m1",
        "raw": "\"./m1\"",
        "start": 14,
        "end": 20
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 0,
      "end": 21
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "ObjectPattern",
            "decorators": [],
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "___",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 30,
                  "end": 33
                },
                "value": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "___",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 30,
                  "end": 33
                },
                "method": false,
                "shorthand": true,
                "computed": false,
                "optional": false,
                "start": 30,
                "end": 33
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "___hello",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 35,
                  "end": 43
                },
                "value": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "___hello",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 35,
                  "end": 43
                },
                "method": false,
                "shorthand": true,
                "computed": false,
                "optional": false,
                "start": 35,
                "end": 43
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "_hi",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 45,
                  "end": 48
                },
                "value": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "_hi",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 45,
                  "end": 48
                },
                "method": false,
                "shorthand": true,
                "computed": false,
                "optional": false,
                "start": 45,
                "end": 48
              }
            ],
            "optional": false,
            "typeAnnotation": null,
            "start": 28,
            "end": 50
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "R",
            "optional": false,
            "typeAnnotation": null,
            "start": 53,
            "end": 54
          },
          "definite": false,
          "start": 28,
          "end": 54
        }
      ],
      "declare": false,
      "start": 22,
      "end": 55
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 55
}
```

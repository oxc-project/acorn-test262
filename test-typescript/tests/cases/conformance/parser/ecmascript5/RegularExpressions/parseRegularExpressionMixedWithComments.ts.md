__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 178,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 22,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 21,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 10,
            "decorators": [],
            "name": "regex1",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "Literal",
            "start": 13,
            "end": 21,
            "raw": "/ asdf /",
            "regex": {
              "flags": "",
              "pattern": " asdf "
            },
            "value": null
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 23,
      "end": 49,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 27,
          "end": 48,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 27,
            "end": 33,
            "decorators": [],
            "name": "regex2",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "Literal",
            "start": 40,
            "end": 48,
            "raw": "/ asdf /",
            "regex": {
              "flags": "",
              "pattern": " asdf "
            },
            "value": null
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 50,
      "end": 116,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 54,
          "end": 115,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 54,
            "end": 60,
            "decorators": [],
            "name": "regex3",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "Literal",
            "start": 114,
            "end": 115,
            "raw": "1",
            "value": 1
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 117,
      "end": 147,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 121,
          "end": 146,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 121,
            "end": 127,
            "decorators": [],
            "name": "regex4",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "BinaryExpression",
            "start": 134,
            "end": 146,
            "operator": "**",
            "left": {
              "type": "Literal",
              "start": 134,
              "end": 137,
              "raw": "/ /",
              "regex": {
                "flags": "",
                "pattern": " "
              },
              "value": null
            },
            "right": {
              "type": "Literal",
              "start": 139,
              "end": 146,
              "raw": "/asdf /",
              "regex": {
                "flags": "",
                "pattern": "asdf "
              },
              "value": null
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 148,
      "end": 178,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 152,
          "end": 177,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 152,
            "end": 158,
            "decorators": [],
            "name": "regex5",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "BinaryExpression",
            "start": 165,
            "end": 177,
            "operator": "**",
            "left": {
              "type": "Literal",
              "start": 165,
              "end": 172,
              "raw": "/ asdf/",
              "regex": {
                "flags": "",
                "pattern": " asdf"
              },
              "value": null
            },
            "right": {
              "type": "Literal",
              "start": 174,
              "end": 177,
              "raw": "/ /",
              "regex": {
                "flags": "",
                "pattern": " "
              },
              "value": null
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```

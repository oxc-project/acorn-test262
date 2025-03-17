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
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 10,
            "name": "regex1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "Literal",
            "start": 13,
            "end": 21,
            "value": null,
            "raw": "/ asdf /",
            "regex": {
              "flags": "",
              "pattern": " asdf "
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 27,
            "end": 33,
            "name": "regex2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "Literal",
            "start": 40,
            "end": 48,
            "value": null,
            "raw": "/ asdf /",
            "regex": {
              "flags": "",
              "pattern": " asdf "
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 54,
            "end": 60,
            "name": "regex3",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "Literal",
            "start": 114,
            "end": 115,
            "value": 1,
            "raw": "1"
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 121,
            "end": 127,
            "name": "regex4",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 134,
            "end": 146,
            "left": {
              "type": "Literal",
              "start": 134,
              "end": 137,
              "value": null,
              "raw": "/ /",
              "regex": {
                "flags": "",
                "pattern": " "
              }
            },
            "operator": "**",
            "right": {
              "type": "Literal",
              "start": 139,
              "end": 146,
              "value": null,
              "raw": "/asdf /",
              "regex": {
                "flags": "",
                "pattern": "asdf "
              }
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 152,
            "end": 158,
            "name": "regex5",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 165,
            "end": 177,
            "left": {
              "type": "Literal",
              "start": 165,
              "end": 172,
              "value": null,
              "raw": "/ asdf/",
              "regex": {
                "flags": "",
                "pattern": " asdf"
              }
            },
            "operator": "**",
            "right": {
              "type": "Literal",
              "start": 174,
              "end": 177,
              "value": null,
              "raw": "/ /",
              "regex": {
                "flags": "",
                "pattern": " "
              }
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```

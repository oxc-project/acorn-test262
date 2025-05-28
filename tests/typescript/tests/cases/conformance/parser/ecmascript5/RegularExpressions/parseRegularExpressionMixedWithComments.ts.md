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
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 21,
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
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 23,
      "end": 49,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 27,
          "end": 48,
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
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 50,
      "end": 116,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 54,
          "end": 115,
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
            "value": 1,
            "raw": "1"
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 117,
      "end": 147,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 121,
          "end": 146,
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
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 148,
      "end": 178,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 152,
          "end": 177,
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
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```

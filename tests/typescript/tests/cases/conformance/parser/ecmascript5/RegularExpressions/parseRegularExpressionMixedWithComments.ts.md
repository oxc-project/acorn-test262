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
            "name": "regex1",
            "optional": false,
            "typeAnnotation": null,
            "start": 4,
            "end": 10
          },
          "init": {
            "type": "Literal",
            "value": null,
            "raw": "/ asdf /",
            "regex": {
              "pattern": " asdf ",
              "flags": ""
            },
            "start": 13,
            "end": 21
          },
          "definite": false,
          "start": 4,
          "end": 21
        }
      ],
      "declare": false,
      "start": 0,
      "end": 22
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "regex2",
            "optional": false,
            "typeAnnotation": null,
            "start": 27,
            "end": 33
          },
          "init": {
            "type": "Literal",
            "value": null,
            "raw": "/ asdf /",
            "regex": {
              "pattern": " asdf ",
              "flags": ""
            },
            "start": 40,
            "end": 48
          },
          "definite": false,
          "start": 27,
          "end": 48
        }
      ],
      "declare": false,
      "start": 23,
      "end": 49
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "regex3",
            "optional": false,
            "typeAnnotation": null,
            "start": 54,
            "end": 60
          },
          "init": {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 114,
            "end": 115
          },
          "definite": false,
          "start": 54,
          "end": 115
        }
      ],
      "declare": false,
      "start": 50,
      "end": 116
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "regex4",
            "optional": false,
            "typeAnnotation": null,
            "start": 121,
            "end": 127
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Literal",
              "value": null,
              "raw": "/ /",
              "regex": {
                "pattern": " ",
                "flags": ""
              },
              "start": 134,
              "end": 137
            },
            "operator": "**",
            "right": {
              "type": "Literal",
              "value": null,
              "raw": "/asdf /",
              "regex": {
                "pattern": "asdf ",
                "flags": ""
              },
              "start": 139,
              "end": 146
            },
            "start": 134,
            "end": 146
          },
          "definite": false,
          "start": 121,
          "end": 146
        }
      ],
      "declare": false,
      "start": 117,
      "end": 147
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "regex5",
            "optional": false,
            "typeAnnotation": null,
            "start": 152,
            "end": 158
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Literal",
              "value": null,
              "raw": "/ asdf/",
              "regex": {
                "pattern": " asdf",
                "flags": ""
              },
              "start": 165,
              "end": 172
            },
            "operator": "**",
            "right": {
              "type": "Literal",
              "value": null,
              "raw": "/ /",
              "regex": {
                "pattern": " ",
                "flags": ""
              },
              "start": 174,
              "end": 177
            },
            "start": 165,
            "end": 177
          },
          "definite": false,
          "start": 152,
          "end": 177
        }
      ],
      "declare": false,
      "start": 148,
      "end": 178
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 178
}
```

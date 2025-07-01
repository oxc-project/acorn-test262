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
            "name": "foge",
            "optional": false,
            "typeAnnotation": null,
            "start": 4,
            "end": 8
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "SharedArrayBuffer",
              "optional": false,
              "typeAnnotation": null,
              "start": 15,
              "end": 32
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": 1024,
                "raw": "1024",
                "start": 33,
                "end": 37
              }
            ],
            "start": 11,
            "end": 38
          },
          "definite": false,
          "start": 4,
          "end": 38
        }
      ],
      "declare": false,
      "start": 0,
      "end": 39
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
            "name": "bar",
            "optional": false,
            "typeAnnotation": null,
            "start": 44,
            "end": 47
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "foge",
                "optional": false,
                "typeAnnotation": null,
                "start": 50,
                "end": 54
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "slice",
                "optional": false,
                "typeAnnotation": null,
                "start": 55,
                "end": 60
              },
              "optional": false,
              "computed": false,
              "start": 50,
              "end": 60
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 61,
                "end": 62
              },
              {
                "type": "Literal",
                "value": 10,
                "raw": "10",
                "start": 64,
                "end": 66
              }
            ],
            "optional": false,
            "start": 50,
            "end": 67
          },
          "definite": false,
          "start": 44,
          "end": 67
        }
      ],
      "declare": false,
      "start": 40,
      "end": 68
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
            "name": "stringTag",
            "optional": false,
            "typeAnnotation": null,
            "start": 73,
            "end": 82
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "foge",
              "optional": false,
              "typeAnnotation": null,
              "start": 85,
              "end": 89
            },
            "property": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "Symbol",
                "optional": false,
                "typeAnnotation": null,
                "start": 90,
                "end": 96
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "toStringTag",
                "optional": false,
                "typeAnnotation": null,
                "start": 97,
                "end": 108
              },
              "optional": false,
              "computed": false,
              "start": 90,
              "end": 108
            },
            "optional": false,
            "computed": true,
            "start": 85,
            "end": 109
          },
          "definite": false,
          "start": 73,
          "end": 109
        }
      ],
      "declare": false,
      "start": 69,
      "end": 110
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
            "name": "len",
            "optional": false,
            "typeAnnotation": null,
            "start": 115,
            "end": 118
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "foge",
              "optional": false,
              "typeAnnotation": null,
              "start": 121,
              "end": 125
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "byteLength",
              "optional": false,
              "typeAnnotation": null,
              "start": 126,
              "end": 136
            },
            "optional": false,
            "computed": false,
            "start": 121,
            "end": 136
          },
          "definite": false,
          "start": 115,
          "end": 136
        }
      ],
      "declare": false,
      "start": 111,
      "end": 137
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
            "name": "species",
            "optional": false,
            "typeAnnotation": null,
            "start": 142,
            "end": 149
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "SharedArrayBuffer",
              "optional": false,
              "typeAnnotation": null,
              "start": 152,
              "end": 169
            },
            "property": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "Symbol",
                "optional": false,
                "typeAnnotation": null,
                "start": 170,
                "end": 176
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "species",
                "optional": false,
                "typeAnnotation": null,
                "start": 177,
                "end": 184
              },
              "optional": false,
              "computed": false,
              "start": 170,
              "end": 184
            },
            "optional": false,
            "computed": true,
            "start": 152,
            "end": 185
          },
          "definite": false,
          "start": 142,
          "end": 185
        }
      ],
      "declare": false,
      "start": 138,
      "end": 186
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 186
}
```

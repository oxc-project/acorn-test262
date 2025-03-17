__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 186,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 39,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 38,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 8,
            "name": "foge",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 11,
            "end": 38,
            "callee": {
              "type": "Identifier",
              "start": 15,
              "end": 32,
              "name": "SharedArrayBuffer",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "Literal",
                "start": 33,
                "end": 37,
                "value": 1024,
                "raw": "1024"
              }
            ],
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 40,
      "end": 68,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 44,
          "end": 67,
          "id": {
            "type": "Identifier",
            "start": 44,
            "end": 47,
            "name": "bar",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 50,
            "end": 67,
            "callee": {
              "type": "MemberExpression",
              "start": 50,
              "end": 60,
              "object": {
                "type": "Identifier",
                "start": 50,
                "end": 54,
                "name": "foge",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 55,
                "end": 60,
                "name": "slice",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "arguments": [
              {
                "type": "Literal",
                "start": 61,
                "end": 62,
                "value": 1,
                "raw": "1"
              },
              {
                "type": "Literal",
                "start": 64,
                "end": 66,
                "value": 10,
                "raw": "10"
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 69,
      "end": 110,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 73,
          "end": 109,
          "id": {
            "type": "Identifier",
            "start": 73,
            "end": 82,
            "name": "stringTag",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 85,
            "end": 109,
            "object": {
              "type": "Identifier",
              "start": 85,
              "end": 89,
              "name": "foge",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "MemberExpression",
              "start": 90,
              "end": 108,
              "object": {
                "type": "Identifier",
                "start": 90,
                "end": 96,
                "name": "Symbol",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 97,
                "end": 108,
                "name": "toStringTag",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "computed": true,
            "optional": false
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 111,
      "end": 137,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 115,
          "end": 136,
          "id": {
            "type": "Identifier",
            "start": 115,
            "end": 118,
            "name": "len",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 121,
            "end": 136,
            "object": {
              "type": "Identifier",
              "start": 121,
              "end": 125,
              "name": "foge",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 126,
              "end": 136,
              "name": "byteLength",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 138,
      "end": 186,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 142,
          "end": 185,
          "id": {
            "type": "Identifier",
            "start": 142,
            "end": 149,
            "name": "species",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 152,
            "end": 185,
            "object": {
              "type": "Identifier",
              "start": 152,
              "end": 169,
              "name": "SharedArrayBuffer",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "MemberExpression",
              "start": 170,
              "end": 184,
              "object": {
                "type": "Identifier",
                "start": 170,
                "end": 176,
                "name": "Symbol",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 177,
                "end": 184,
                "name": "species",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "computed": true,
            "optional": false
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

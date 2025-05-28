__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 318,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 38,
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 16,
        "decorators": [],
        "name": "Object",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 17,
        "end": 38,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 23,
            "end": 36,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 23,
              "end": 27,
              "decorators": [],
              "name": "data",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 27,
              "end": 35,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 29,
                "end": 35
              }
            },
            "accessibility": null,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 39,
      "end": 87,
      "id": {
        "type": "Identifier",
        "start": 49,
        "end": 57,
        "decorators": [],
        "name": "Function",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 58,
        "end": 87,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 64,
            "end": 85,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 64,
              "end": 76,
              "decorators": [],
              "name": "functionData",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 76,
              "end": 84,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 78,
                "end": 84
              }
            },
            "accessibility": null,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 88,
      "end": 99,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 92,
          "end": 98,
          "id": {
            "type": "Identifier",
            "start": 92,
            "end": 93,
            "decorators": [],
            "name": "o",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ObjectExpression",
            "start": 96,
            "end": 98,
            "properties": []
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 100,
      "end": 124,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 104,
          "end": 123,
          "id": {
            "type": "Identifier",
            "start": 104,
            "end": 105,
            "decorators": [],
            "name": "f",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "FunctionExpression",
            "start": 108,
            "end": 123,
            "id": null,
            "generator": false,
            "async": false,
            "declare": false,
            "typeParameters": null,
            "params": [],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "start": 120,
              "end": 123,
              "body": []
            },
            "expression": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 126,
      "end": 145,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 130,
          "end": 144,
          "id": {
            "type": "Identifier",
            "start": 130,
            "end": 132,
            "decorators": [],
            "name": "r1",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "MemberExpression",
            "start": 135,
            "end": 144,
            "object": {
              "type": "Identifier",
              "start": 135,
              "end": 136,
              "decorators": [],
              "name": "o",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Literal",
              "start": 137,
              "end": 143,
              "value": "data",
              "raw": "'data'"
            },
            "optional": false,
            "computed": true
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 166,
      "end": 193,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 170,
          "end": 192,
          "id": {
            "type": "Identifier",
            "start": 170,
            "end": 172,
            "decorators": [],
            "name": "r2",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "MemberExpression",
            "start": 175,
            "end": 192,
            "object": {
              "type": "Identifier",
              "start": 175,
              "end": 176,
              "decorators": [],
              "name": "o",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Literal",
              "start": 177,
              "end": 191,
              "value": "functionData",
              "raw": "'functionData'"
            },
            "optional": false,
            "computed": true
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 231,
      "end": 258,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 235,
          "end": 257,
          "id": {
            "type": "Identifier",
            "start": 235,
            "end": 237,
            "decorators": [],
            "name": "r3",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "MemberExpression",
            "start": 240,
            "end": 257,
            "object": {
              "type": "Identifier",
              "start": 240,
              "end": 241,
              "decorators": [],
              "name": "f",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Literal",
              "start": 242,
              "end": 256,
              "value": "functionData",
              "raw": "'functionData'"
            },
            "optional": false,
            "computed": true
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 279,
      "end": 298,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 283,
          "end": 297,
          "id": {
            "type": "Identifier",
            "start": 283,
            "end": 285,
            "decorators": [],
            "name": "r4",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "MemberExpression",
            "start": 288,
            "end": 297,
            "object": {
              "type": "Identifier",
              "start": 288,
              "end": 289,
              "decorators": [],
              "name": "f",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Literal",
              "start": 290,
              "end": 296,
              "value": "data",
              "raw": "'data'"
            },
            "optional": false,
            "computed": true
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

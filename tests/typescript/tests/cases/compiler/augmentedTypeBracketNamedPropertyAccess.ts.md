__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Object",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 16
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "data",
              "optional": false,
              "typeAnnotation": null,
              "start": 23,
              "end": 27
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 29,
                "end": 35
              },
              "start": 27,
              "end": 35
            },
            "accessibility": null,
            "static": false,
            "start": 23,
            "end": 36
          }
        ],
        "start": 17,
        "end": 38
      },
      "declare": false,
      "start": 0,
      "end": 38
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Function",
        "optional": false,
        "typeAnnotation": null,
        "start": 49,
        "end": 57
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "functionData",
              "optional": false,
              "typeAnnotation": null,
              "start": 64,
              "end": 76
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 78,
                "end": 84
              },
              "start": 76,
              "end": 84
            },
            "accessibility": null,
            "static": false,
            "start": 64,
            "end": 85
          }
        ],
        "start": 58,
        "end": 87
      },
      "declare": false,
      "start": 39,
      "end": 87
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
            "name": "o",
            "optional": false,
            "typeAnnotation": null,
            "start": 92,
            "end": 93
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [],
            "start": 96,
            "end": 98
          },
          "definite": false,
          "start": 92,
          "end": 98
        }
      ],
      "declare": false,
      "start": 88,
      "end": 99
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
            "name": "f",
            "optional": false,
            "typeAnnotation": null,
            "start": 104,
            "end": 105
          },
          "init": {
            "type": "FunctionExpression",
            "id": null,
            "generator": false,
            "async": false,
            "declare": false,
            "typeParameters": null,
            "params": [],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [],
              "start": 120,
              "end": 123
            },
            "expression": false,
            "start": 108,
            "end": 123
          },
          "definite": false,
          "start": 104,
          "end": 123
        }
      ],
      "declare": false,
      "start": 100,
      "end": 124
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
            "name": "r1",
            "optional": false,
            "typeAnnotation": null,
            "start": 130,
            "end": 132
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "o",
              "optional": false,
              "typeAnnotation": null,
              "start": 135,
              "end": 136
            },
            "property": {
              "type": "Literal",
              "value": "data",
              "raw": "'data'",
              "start": 137,
              "end": 143
            },
            "optional": false,
            "computed": true,
            "start": 135,
            "end": 144
          },
          "definite": false,
          "start": 130,
          "end": 144
        }
      ],
      "declare": false,
      "start": 126,
      "end": 145
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
            "name": "r2",
            "optional": false,
            "typeAnnotation": null,
            "start": 170,
            "end": 172
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "o",
              "optional": false,
              "typeAnnotation": null,
              "start": 175,
              "end": 176
            },
            "property": {
              "type": "Literal",
              "value": "functionData",
              "raw": "'functionData'",
              "start": 177,
              "end": 191
            },
            "optional": false,
            "computed": true,
            "start": 175,
            "end": 192
          },
          "definite": false,
          "start": 170,
          "end": 192
        }
      ],
      "declare": false,
      "start": 166,
      "end": 193
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
            "name": "r3",
            "optional": false,
            "typeAnnotation": null,
            "start": 235,
            "end": 237
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "f",
              "optional": false,
              "typeAnnotation": null,
              "start": 240,
              "end": 241
            },
            "property": {
              "type": "Literal",
              "value": "functionData",
              "raw": "'functionData'",
              "start": 242,
              "end": 256
            },
            "optional": false,
            "computed": true,
            "start": 240,
            "end": 257
          },
          "definite": false,
          "start": 235,
          "end": 257
        }
      ],
      "declare": false,
      "start": 231,
      "end": 258
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
            "name": "r4",
            "optional": false,
            "typeAnnotation": null,
            "start": 283,
            "end": 285
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "f",
              "optional": false,
              "typeAnnotation": null,
              "start": 288,
              "end": 289
            },
            "property": {
              "type": "Literal",
              "value": "data",
              "raw": "'data'",
              "start": 290,
              "end": 296
            },
            "optional": false,
            "computed": true,
            "start": 288,
            "end": 297
          },
          "definite": false,
          "start": 283,
          "end": 297
        }
      ],
      "declare": false,
      "start": 279,
      "end": 298
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 318
}
```

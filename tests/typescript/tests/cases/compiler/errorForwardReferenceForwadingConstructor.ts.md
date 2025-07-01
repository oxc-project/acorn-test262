__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f",
        "optional": false,
        "typeAnnotation": null,
        "start": 81,
        "end": 82
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
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
                  "name": "d1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 95,
                  "end": 97
                },
                "init": {
                  "type": "NewExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "derived",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 104,
                    "end": 111
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "start": 100,
                  "end": 113
                },
                "definite": false,
                "start": 95,
                "end": 113
              }
            ],
            "declare": false,
            "start": 91,
            "end": 114
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
                  "name": "d2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 123,
                  "end": 125
                },
                "init": {
                  "type": "NewExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "derived",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 132,
                    "end": 139
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Literal",
                      "value": 4,
                      "raw": "4",
                      "start": 140,
                      "end": 141
                    }
                  ],
                  "start": 128,
                  "end": 142
                },
                "definite": false,
                "start": 123,
                "end": 142
              }
            ],
            "declare": false,
            "start": 119,
            "end": 143
          }
        ],
        "start": 85,
        "end": 145
      },
      "expression": false,
      "start": 72,
      "end": 145
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "base",
        "optional": false,
        "typeAnnotation": null,
        "start": 153,
        "end": 157
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null,
              "start": 160,
              "end": 171
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "TSParameterProperty",
                  "accessibility": "public",
                  "decorators": [],
                  "override": false,
                  "parameter": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "n",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 182,
                        "end": 188
                      },
                      "start": 180,
                      "end": 188
                    },
                    "start": 179,
                    "end": 188
                  },
                  "readonly": false,
                  "static": false,
                  "start": 172,
                  "end": 188
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 190,
                "end": 193
              },
              "expression": false,
              "start": 171,
              "end": 193
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 160,
            "end": 193
          }
        ],
        "start": 158,
        "end": 195
      },
      "abstract": false,
      "declare": false,
      "start": 147,
      "end": 195
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "derived",
        "optional": false,
        "typeAnnotation": null,
        "start": 202,
        "end": 209
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "base",
        "optional": false,
        "typeAnnotation": null,
        "start": 218,
        "end": 222
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [],
        "start": 223,
        "end": 226
      },
      "abstract": false,
      "declare": false,
      "start": 196,
      "end": 226
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 72,
  "end": 226
}
```

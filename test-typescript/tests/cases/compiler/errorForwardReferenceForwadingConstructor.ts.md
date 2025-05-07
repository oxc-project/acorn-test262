__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 72,
  "end": 226,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 72,
      "end": 145,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 85,
        "end": 145,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 91,
            "end": 114,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 95,
                "end": 113,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 95,
                  "end": 97,
                  "decorators": [],
                  "name": "d1",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "NewExpression",
                  "start": 100,
                  "end": 113,
                  "arguments": [],
                  "callee": {
                    "type": "Identifier",
                    "start": 104,
                    "end": 111,
                    "decorators": [],
                    "name": "derived",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                }
              }
            ],
            "declare": false,
            "kind": "var"
          },
          {
            "type": "VariableDeclaration",
            "start": 119,
            "end": 143,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 123,
                "end": 142,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 123,
                  "end": 125,
                  "decorators": [],
                  "name": "d2",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "NewExpression",
                  "start": 128,
                  "end": 142,
                  "arguments": [
                    {
                      "type": "Literal",
                      "start": 140,
                      "end": 141,
                      "raw": "4",
                      "value": 4,
                      "regex": null,
                      "bigint": null
                    }
                  ],
                  "callee": {
                    "type": "Identifier",
                    "start": 132,
                    "end": 139,
                    "decorators": [],
                    "name": "derived",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                }
              }
            ],
            "declare": false,
            "kind": "var"
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 81,
        "end": 82,
        "decorators": [],
        "name": "f",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "ClassDeclaration",
      "start": 147,
      "end": 195,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 158,
        "end": 195,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 160,
            "end": 193,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 160,
              "end": 171,
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "constructor",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 171,
              "end": 193,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 190,
                "end": 193,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "TSParameterProperty",
                  "start": 172,
                  "end": 188,
                  "accessibility": "public",
                  "decorators": [],
                  "override": false,
                  "parameter": {
                    "type": "Identifier",
                    "start": 179,
                    "end": 188,
                    "decorators": [],
                    "name": "n",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 180,
                      "end": 188,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 182,
                        "end": 188
                      }
                    }
                  },
                  "readonly": false,
                  "static": false
                }
              ],
              "returnType": null,
              "typeParameters": null
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 153,
        "end": 157,
        "decorators": [],
        "name": "base",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "ClassDeclaration",
      "start": 196,
      "end": 226,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 223,
        "end": 226,
        "body": []
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 202,
        "end": 209,
        "decorators": [],
        "name": "derived",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 218,
        "end": 222,
        "decorators": [],
        "name": "base",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "typeParameters": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```

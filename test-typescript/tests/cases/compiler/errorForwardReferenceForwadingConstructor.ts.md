__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 72,
  "end": 227,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 72,
      "end": 145,
      "id": {
        "type": "Identifier",
        "start": 81,
        "end": 82,
        "name": "f",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [],
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
                "id": {
                  "type": "Identifier",
                  "start": 95,
                  "end": 97,
                  "name": "d1",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "NewExpression",
                  "start": 100,
                  "end": 113,
                  "callee": {
                    "type": "Identifier",
                    "start": 104,
                    "end": 111,
                    "name": "derived",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "arguments": [],
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
            "start": 119,
            "end": 143,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 123,
                "end": 142,
                "id": {
                  "type": "Identifier",
                  "start": 123,
                  "end": 125,
                  "name": "d2",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "NewExpression",
                  "start": 128,
                  "end": 142,
                  "callee": {
                    "type": "Identifier",
                    "start": 132,
                    "end": 139,
                    "name": "derived",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "arguments": [
                    {
                      "type": "Literal",
                      "start": 140,
                      "end": 141,
                      "value": 4,
                      "raw": "4"
                    }
                  ],
                  "typeArguments": null
                },
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "ClassDeclaration",
      "start": 147,
      "end": 195,
      "id": {
        "type": "Identifier",
        "start": 153,
        "end": 157,
        "name": "base",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 158,
        "end": 195,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 160,
            "end": 193,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 160,
              "end": 171,
              "name": "constructor",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "constructor",
            "value": {
              "type": "FunctionExpression",
              "start": 171,
              "end": 193,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
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
                    "name": "n",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 180,
                      "end": 188,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 182,
                        "end": 188
                      }
                    },
                    "decorators": [],
                    "optional": false
                  },
                  "readonly": false,
                  "static": false
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 190,
                "end": 193,
                "body": []
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
          }
        ]
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    },
    {
      "type": "ClassDeclaration",
      "start": 196,
      "end": 226,
      "id": {
        "type": "Identifier",
        "start": 202,
        "end": 209,
        "name": "derived",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "Identifier",
        "start": 218,
        "end": 222,
        "name": "base",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "ClassBody",
        "start": 223,
        "end": 226,
        "body": []
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```

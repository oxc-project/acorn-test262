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
      "id": {
        "type": "Identifier",
        "start": 81,
        "end": 82,
        "decorators": [],
        "name": "f",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 85,
        "end": 145,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 91,
            "end": 114,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 95,
                "end": 113,
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
                  "callee": {
                    "type": "Identifier",
                    "start": 104,
                    "end": 111,
                    "decorators": [],
                    "name": "derived",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null,
                  "arguments": []
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 119,
            "end": 143,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 123,
                "end": 142,
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
                  "callee": {
                    "type": "Identifier",
                    "start": 132,
                    "end": 139,
                    "decorators": [],
                    "name": "derived",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Literal",
                      "start": 140,
                      "end": 141,
                      "value": 4,
                      "raw": "4"
                    }
                  ]
                },
                "definite": false
              }
            ],
            "declare": false
          }
        ]
      },
      "expression": false
    },
    {
      "type": "ClassDeclaration",
      "start": 147,
      "end": 195,
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
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 158,
        "end": 195,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 160,
            "end": 193,
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
            "value": {
              "type": "FunctionExpression",
              "start": 171,
              "end": 193,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
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
              "body": {
                "type": "BlockStatement",
                "start": 190,
                "end": 193,
                "body": []
              },
              "expression": false
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          }
        ]
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 196,
      "end": 226,
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
      "typeParameters": null,
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
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 223,
        "end": 226,
        "body": []
      },
      "abstract": false,
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```

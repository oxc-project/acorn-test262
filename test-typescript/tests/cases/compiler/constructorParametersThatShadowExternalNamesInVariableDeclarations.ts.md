__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 154,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 10,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 9,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 5,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "Literal",
            "start": 8,
            "end": 9,
            "raw": "1",
            "value": 1,
            "regex": null,
            "bigint": null
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ClassDeclaration",
      "start": 11,
      "end": 76,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 19,
        "end": 76,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 25,
            "end": 39,
            "accessibility": "private",
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 33,
              "end": 34,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": null,
            "value": {
              "type": "Identifier",
              "start": 37,
              "end": 38,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            }
          },
          {
            "type": "MethodDefinition",
            "start": 44,
            "end": 74,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 44,
              "end": 55,
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
              "start": 55,
              "end": 74,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 67,
                "end": 74,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 56,
                  "end": 65,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 57,
                    "end": 65,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 59,
                      "end": 65
                    }
                  }
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
        "start": 17,
        "end": 18,
        "decorators": [],
        "name": "A",
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
      "start": 78,
      "end": 154,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 86,
        "end": 154,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 92,
            "end": 106,
            "accessibility": "private",
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 100,
              "end": 101,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": null,
            "value": {
              "type": "Identifier",
              "start": 104,
              "end": 105,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            }
          },
          {
            "type": "MethodDefinition",
            "start": 111,
            "end": 152,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 111,
              "end": 122,
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
              "start": 122,
              "end": 152,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 125,
                "end": 152,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 135,
                    "end": 146,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 139,
                        "end": 145,
                        "definite": false,
                        "id": {
                          "type": "Identifier",
                          "start": 139,
                          "end": 140,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "init": {
                          "type": "Literal",
                          "start": 143,
                          "end": 145,
                          "raw": "\"\"",
                          "value": "",
                          "regex": null,
                          "bigint": null
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
              "id": null,
              "params": [],
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
        "start": 84,
        "end": 85,
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```

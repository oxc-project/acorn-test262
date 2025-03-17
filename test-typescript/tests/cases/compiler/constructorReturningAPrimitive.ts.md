__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 203,
  "end": 380,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 203,
      "end": 258,
      "id": {
        "type": "Identifier",
        "start": 209,
        "end": 210,
        "name": "A",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 211,
        "end": 258,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 217,
            "end": 256,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 217,
              "end": 228,
              "name": "constructor",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "constructor",
            "value": {
              "type": "FunctionExpression",
              "start": 228,
              "end": 256,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 231,
                "end": 256,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 241,
                    "end": 250,
                    "argument": {
                      "type": "Literal",
                      "start": 248,
                      "end": 249,
                      "value": 1,
                      "raw": "1"
                    }
                  }
                ]
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
      "type": "VariableDeclaration",
      "start": 260,
      "end": 276,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 264,
          "end": 275,
          "id": {
            "type": "Identifier",
            "start": 264,
            "end": 265,
            "name": "a",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 268,
            "end": 275,
            "callee": {
              "type": "Identifier",
              "start": 272,
              "end": 273,
              "name": "A",
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
      "type": "ClassDeclaration",
      "start": 278,
      "end": 354,
      "id": {
        "type": "Identifier",
        "start": 284,
        "end": 285,
        "name": "B",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 289,
        "end": 354,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 295,
            "end": 352,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 295,
              "end": 306,
              "name": "constructor",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "constructor",
            "value": {
              "type": "FunctionExpression",
              "start": 306,
              "end": 352,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 309,
                "end": 352,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 319,
                    "end": 328,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 323,
                        "end": 327,
                        "id": {
                          "type": "Identifier",
                          "start": 323,
                          "end": 327,
                          "name": "x",
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 324,
                            "end": 327,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 326,
                              "end": 327,
                              "typeName": {
                                "type": "Identifier",
                                "start": 326,
                                "end": 327,
                                "name": "T",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "typeArguments": null
                            }
                          },
                          "decorators": [],
                          "optional": false
                        },
                        "init": null,
                        "definite": false
                      }
                    ],
                    "kind": "var",
                    "declare": false
                  },
                  {
                    "type": "ReturnStatement",
                    "start": 337,
                    "end": 346,
                    "argument": {
                      "type": "Identifier",
                      "start": 344,
                      "end": 345,
                      "name": "x",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  }
                ]
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
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 285,
        "end": 288,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 286,
            "end": 287,
            "name": {
              "type": "Identifier",
              "start": 286,
              "end": 287,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    },
    {
      "type": "VariableDeclaration",
      "start": 356,
      "end": 380,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 360,
          "end": 379,
          "id": {
            "type": "Identifier",
            "start": 360,
            "end": 361,
            "name": "b",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 364,
            "end": 379,
            "callee": {
              "type": "Identifier",
              "start": 368,
              "end": 369,
              "name": "B",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [],
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 369,
              "end": 377,
              "params": [
                {
                  "type": "TSNumberKeyword",
                  "start": 370,
                  "end": 376
                }
              ]
            }
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

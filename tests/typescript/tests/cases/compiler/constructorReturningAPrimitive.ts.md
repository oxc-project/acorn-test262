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
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 209,
        "end": 210,
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 211,
        "end": 258,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 217,
            "end": 256,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 217,
              "end": 228,
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 228,
              "end": 256,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
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
      "type": "VariableDeclaration",
      "start": 260,
      "end": 276,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 264,
          "end": 275,
          "id": {
            "type": "Identifier",
            "start": 264,
            "end": 265,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "NewExpression",
            "start": 268,
            "end": 275,
            "callee": {
              "type": "Identifier",
              "start": 272,
              "end": 273,
              "decorators": [],
              "name": "A",
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
      "type": "ClassDeclaration",
      "start": 278,
      "end": 354,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 284,
        "end": 285,
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null
      },
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
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 289,
        "end": 354,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 295,
            "end": 352,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 295,
              "end": 306,
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 306,
              "end": 352,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 309,
                "end": 352,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 319,
                    "end": 328,
                    "kind": "var",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 323,
                        "end": 327,
                        "id": {
                          "type": "Identifier",
                          "start": 323,
                          "end": 327,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
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
                                "decorators": [],
                                "name": "T",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "typeArguments": null
                            }
                          }
                        },
                        "init": null,
                        "definite": false
                      }
                    ],
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
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                ]
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
      "type": "VariableDeclaration",
      "start": 356,
      "end": 380,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 360,
          "end": 379,
          "id": {
            "type": "Identifier",
            "start": 360,
            "end": 361,
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "NewExpression",
            "start": 364,
            "end": 379,
            "callee": {
              "type": "Identifier",
              "start": 368,
              "end": 369,
              "decorators": [],
              "name": "B",
              "optional": false,
              "typeAnnotation": null
            },
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
            },
            "arguments": []
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

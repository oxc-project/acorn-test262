__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 84,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 42,
      "body": {
        "type": "TSInterfaceBody",
        "start": 19,
        "end": 42,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 25,
            "end": 40,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 25,
              "end": 29,
              "decorators": [],
              "name": "draw",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "params": [],
            "readonly": false,
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 31,
              "end": 39,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 33,
                "end": 39
              }
            },
            "static": false,
            "typeParameters": null
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 18,
        "decorators": [],
        "name": "Drawable",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 43,
      "end": 84,
      "body": {
        "type": "TSInterfaceBody",
        "start": 61,
        "end": 84,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 67,
            "end": 82,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 67,
              "end": 71,
              "decorators": [],
              "name": "size",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "params": [],
            "readonly": false,
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 73,
              "end": 81,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 75,
                "end": 81
              }
            },
            "static": false,
            "typeParameters": null
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 53,
        "end": 60,
        "decorators": [],
        "name": "Sizable",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 61,
  "end": 266,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 61,
      "end": 151,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 74,
        "end": 151,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 80,
            "end": 112,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 80,
              "end": 84,
              "decorators": [],
              "name": "draw",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 84,
              "end": 112,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 87,
                "end": 112,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 97,
                    "end": 106,
                    "argument": {
                      "type": "Literal",
                      "start": 104,
                      "end": 105,
                      "raw": "0",
                      "value": 0,
                      "regex": null,
                      "bigint": null
                    }
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
          },
          {
            "type": "MethodDefinition",
            "start": 117,
            "end": 149,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 117,
              "end": 121,
              "decorators": [],
              "name": "size",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 121,
              "end": 149,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 124,
                "end": 149,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 134,
                    "end": 143,
                    "argument": {
                      "type": "Literal",
                      "start": 141,
                      "end": 142,
                      "raw": "0",
                      "value": 0,
                      "regex": null,
                      "bigint": null
                    }
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
        "start": 67,
        "end": 73,
        "decorators": [],
        "name": "Square",
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
      "start": 210,
      "end": 266,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 226,
        "end": 266,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 232,
            "end": 264,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 232,
              "end": 236,
              "decorators": [],
              "name": "size",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 236,
              "end": 264,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 239,
                "end": 264,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 249,
                    "end": 258,
                    "argument": {
                      "type": "Literal",
                      "start": 256,
                      "end": 257,
                      "raw": "0",
                      "value": 0,
                      "regex": null,
                      "bigint": null
                    }
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
        "start": 216,
        "end": 225,
        "decorators": [],
        "name": "BadSquare",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": null
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```

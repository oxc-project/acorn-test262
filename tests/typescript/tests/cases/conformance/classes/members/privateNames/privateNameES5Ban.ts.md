__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 258,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 257,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 7,
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
        "start": 8,
        "end": 257,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 14,
            "end": 30,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 14,
              "end": 25,
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 25,
              "end": 30,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 28,
                "end": 30,
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
          },
          {
            "type": "PropertyDefinition",
            "start": 35,
            "end": 48,
            "decorators": [],
            "key": {
              "type": "PrivateIdentifier",
              "start": 35,
              "end": 41,
              "name": "field"
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "start": 44,
              "end": 47,
              "value": 123,
              "raw": "123"
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 53,
            "end": 65,
            "decorators": [],
            "key": {
              "type": "PrivateIdentifier",
              "start": 53,
              "end": 60,
              "name": "method"
            },
            "value": {
              "type": "FunctionExpression",
              "start": 60,
              "end": 65,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 63,
                "end": 65,
                "body": []
              },
              "expression": false
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "PropertyDefinition",
            "start": 70,
            "end": 101,
            "decorators": [],
            "key": {
              "type": "PrivateIdentifier",
              "start": 77,
              "end": 84,
              "name": "sField"
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "start": 87,
              "end": 100,
              "value": "hello world",
              "raw": "\"hello world\""
            },
            "computed": false,
            "static": true,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 106,
            "end": 126,
            "decorators": [],
            "key": {
              "type": "PrivateIdentifier",
              "start": 113,
              "end": 121,
              "name": "sMethod"
            },
            "value": {
              "type": "FunctionExpression",
              "start": 121,
              "end": 126,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 124,
                "end": 126,
                "body": []
              },
              "expression": false
            },
            "kind": "method",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 131,
            "end": 156,
            "decorators": [],
            "key": {
              "type": "PrivateIdentifier",
              "start": 135,
              "end": 139,
              "name": "acc"
            },
            "value": {
              "type": "FunctionExpression",
              "start": 139,
              "end": 156,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 142,
                "end": 156,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 144,
                    "end": 154,
                    "argument": {
                      "type": "Literal",
                      "start": 151,
                      "end": 153,
                      "value": "",
                      "raw": "\"\""
                    }
                  }
                ]
              },
              "expression": false
            },
            "kind": "get",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 161,
            "end": 183,
            "decorators": [],
            "key": {
              "type": "PrivateIdentifier",
              "start": 165,
              "end": 169,
              "name": "acc"
            },
            "value": {
              "type": "FunctionExpression",
              "start": 169,
              "end": 183,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 170,
                  "end": 179,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 171,
                    "end": 179,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 173,
                      "end": 179
                    }
                  }
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 181,
                "end": 183,
                "body": []
              },
              "expression": false
            },
            "kind": "set",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 188,
            "end": 220,
            "decorators": [],
            "key": {
              "type": "PrivateIdentifier",
              "start": 199,
              "end": 204,
              "name": "sAcc"
            },
            "value": {
              "type": "FunctionExpression",
              "start": 204,
              "end": 220,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 207,
                "end": 220,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 209,
                    "end": 218,
                    "argument": {
                      "type": "Literal",
                      "start": 216,
                      "end": 217,
                      "value": 0,
                      "raw": "0"
                    }
                  }
                ]
              },
              "expression": false
            },
            "kind": "get",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 225,
            "end": 255,
            "decorators": [],
            "key": {
              "type": "PrivateIdentifier",
              "start": 236,
              "end": 241,
              "name": "sAcc"
            },
            "value": {
              "type": "FunctionExpression",
              "start": 241,
              "end": 255,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 242,
                  "end": 251,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 243,
                    "end": 251,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 245,
                      "end": 251
                    }
                  }
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 253,
                "end": 255,
                "body": []
              },
              "expression": false
            },
            "kind": "set",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null
          }
        ]
      },
      "abstract": false,
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```

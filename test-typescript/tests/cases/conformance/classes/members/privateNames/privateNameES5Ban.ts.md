__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 259,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 257,
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 7,
        "name": "A",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 8,
        "end": 257,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 14,
            "end": 30,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 14,
              "end": 25,
              "name": "constructor",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "constructor",
            "value": {
              "type": "FunctionExpression",
              "start": 25,
              "end": 30,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 28,
                "end": 30,
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
          },
          {
            "type": "PropertyDefinition",
            "start": 35,
            "end": 48,
            "static": false,
            "computed": false,
            "key": {
              "type": "PrivateIdentifier",
              "start": 35,
              "end": 41,
              "name": "field"
            },
            "value": {
              "type": "Literal",
              "start": 44,
              "end": 47,
              "value": 123,
              "raw": "123"
            },
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": null,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 53,
            "end": 65,
            "static": false,
            "computed": false,
            "key": {
              "type": "PrivateIdentifier",
              "start": 53,
              "end": 60,
              "name": "method"
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 60,
              "end": 65,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 63,
                "end": 65,
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
          },
          {
            "type": "PropertyDefinition",
            "start": 70,
            "end": 101,
            "static": true,
            "computed": false,
            "key": {
              "type": "PrivateIdentifier",
              "start": 77,
              "end": 84,
              "name": "sField"
            },
            "value": {
              "type": "Literal",
              "start": 87,
              "end": 100,
              "value": "hello world",
              "raw": "\"hello world\""
            },
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": null,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 106,
            "end": 126,
            "static": true,
            "computed": false,
            "key": {
              "type": "PrivateIdentifier",
              "start": 113,
              "end": 121,
              "name": "sMethod"
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 121,
              "end": 126,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 124,
                "end": 126,
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
          },
          {
            "type": "MethodDefinition",
            "start": 131,
            "end": 156,
            "static": false,
            "computed": false,
            "key": {
              "type": "PrivateIdentifier",
              "start": 135,
              "end": 139,
              "name": "acc"
            },
            "kind": "get",
            "value": {
              "type": "FunctionExpression",
              "start": 139,
              "end": 156,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
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
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 161,
            "end": 183,
            "static": false,
            "computed": false,
            "key": {
              "type": "PrivateIdentifier",
              "start": 165,
              "end": 169,
              "name": "acc"
            },
            "kind": "set",
            "value": {
              "type": "FunctionExpression",
              "start": 169,
              "end": 183,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 170,
                  "end": 179,
                  "name": "x",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 171,
                    "end": 179,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 173,
                      "end": 179
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 181,
                "end": 183,
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
          },
          {
            "type": "MethodDefinition",
            "start": 188,
            "end": 220,
            "static": true,
            "computed": false,
            "key": {
              "type": "PrivateIdentifier",
              "start": 199,
              "end": 204,
              "name": "sAcc"
            },
            "kind": "get",
            "value": {
              "type": "FunctionExpression",
              "start": 204,
              "end": 220,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
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
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 225,
            "end": 255,
            "static": true,
            "computed": false,
            "key": {
              "type": "PrivateIdentifier",
              "start": 236,
              "end": 241,
              "name": "sAcc"
            },
            "kind": "set",
            "value": {
              "type": "FunctionExpression",
              "start": 241,
              "end": 255,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 242,
                  "end": 251,
                  "name": "x",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 243,
                    "end": 251,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 245,
                      "end": 251
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 253,
                "end": 255,
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
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```

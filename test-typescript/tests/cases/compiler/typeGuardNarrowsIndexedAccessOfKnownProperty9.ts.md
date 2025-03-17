__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 216,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 215,
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 8,
        "name": "C1",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 9,
        "end": 215,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 15,
            "end": 31,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 23,
              "end": 24,
              "name": "a",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": {
              "type": "Literal",
              "start": 27,
              "end": 30,
              "value": "a",
              "raw": "\"a\""
            },
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": null,
            "accessibility": "private"
          },
          {
            "type": "PropertyDefinition",
            "start": 42,
            "end": 58,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 50,
              "end": 51,
              "name": "b",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": {
              "type": "Literal",
              "start": 54,
              "end": 57,
              "value": "b",
              "raw": "\"b\""
            },
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": null,
            "accessibility": "private"
          },
          {
            "type": "PropertyDefinition",
            "start": 70,
            "end": 86,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 78,
              "end": 79,
              "name": "c",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": {
              "type": "Literal",
              "start": 82,
              "end": 85,
              "value": "c",
              "raw": "\"c\""
            },
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": null,
            "accessibility": "private"
          },
          {
            "type": "PropertyDefinition",
            "start": 112,
            "end": 128,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 120,
              "end": 121,
              "name": "d",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": {
              "type": "Literal",
              "start": 124,
              "end": 127,
              "value": "d",
              "raw": "\"d\""
            },
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": null,
            "accessibility": "private"
          },
          {
            "type": "MethodDefinition",
            "start": 155,
            "end": 213,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 155,
              "end": 163,
              "name": "getValue",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 163,
              "end": 213,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 164,
                  "end": 178,
                  "name": "key",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 167,
                    "end": 178,
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "start": 169,
                      "end": 178,
                      "types": [
                        {
                          "type": "TSLiteralType",
                          "start": 169,
                          "end": 172,
                          "literal": {
                            "type": "Literal",
                            "start": 169,
                            "end": 172,
                            "value": "a",
                            "raw": "\"a\""
                          }
                        },
                        {
                          "type": "TSLiteralType",
                          "start": 175,
                          "end": 178,
                          "literal": {
                            "type": "Literal",
                            "start": 175,
                            "end": 178,
                            "value": "b",
                            "raw": "\"b\""
                          }
                        }
                      ]
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 180,
                "end": 213,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 190,
                    "end": 207,
                    "argument": {
                      "type": "MemberExpression",
                      "start": 197,
                      "end": 206,
                      "object": {
                        "type": "ThisExpression",
                        "start": 197,
                        "end": 201
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 202,
                        "end": 205,
                        "name": "key",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "computed": true,
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

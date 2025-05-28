__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 170,
  "body": [
    {
      "type": "BlockStatement",
      "start": 0,
      "end": 55,
      "body": [
        {
          "type": "VariableDeclaration",
          "start": 4,
          "end": 53,
          "kind": "using",
          "declarations": [
            {
              "type": "VariableDeclarator",
              "start": 10,
              "end": 52,
              "id": {
                "type": "Identifier",
                "start": 10,
                "end": 11,
                "decorators": [],
                "name": "_",
                "optional": false,
                "typeAnnotation": null
              },
              "init": {
                "type": "ObjectExpression",
                "start": 14,
                "end": 52,
                "properties": [
                  {
                    "type": "Property",
                    "start": 16,
                    "end": 37,
                    "kind": "init",
                    "key": {
                      "type": "MemberExpression",
                      "start": 17,
                      "end": 31,
                      "object": {
                        "type": "Identifier",
                        "start": 17,
                        "end": 23,
                        "decorators": [],
                        "name": "Symbol",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 24,
                        "end": 31,
                        "decorators": [],
                        "name": "dispose",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "computed": false
                    },
                    "value": {
                      "type": "FunctionExpression",
                      "start": 32,
                      "end": 37,
                      "id": null,
                      "generator": false,
                      "async": false,
                      "declare": false,
                      "typeParameters": null,
                      "params": [],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "start": 35,
                        "end": 37,
                        "body": []
                      },
                      "expression": false
                    },
                    "method": true,
                    "shorthand": false,
                    "computed": true,
                    "optional": false
                  },
                  {
                    "type": "Property",
                    "start": 39,
                    "end": 50,
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "start": 39,
                      "end": 44,
                      "decorators": [],
                      "name": "value",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "value": {
                      "type": "Literal",
                      "start": 46,
                      "end": 50,
                      "value": null,
                      "raw": "null"
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false
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
    {
      "type": "FunctionDeclaration",
      "start": 57,
      "end": 158,
      "id": {
        "type": "Identifier",
        "start": 72,
        "end": 73,
        "decorators": [],
        "name": "f",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": true,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 76,
        "end": 158,
        "body": [
          {
            "type": "BlockStatement",
            "start": 80,
            "end": 156,
            "body": [
              {
                "type": "VariableDeclaration",
                "start": 86,
                "end": 152,
                "kind": "await using",
                "declarations": [
                  {
                    "type": "VariableDeclarator",
                    "start": 98,
                    "end": 151,
                    "id": {
                      "type": "Identifier",
                      "start": 98,
                      "end": 99,
                      "decorators": [],
                      "name": "_",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "init": {
                      "type": "ObjectExpression",
                      "start": 102,
                      "end": 151,
                      "properties": [
                        {
                          "type": "Property",
                          "start": 104,
                          "end": 136,
                          "kind": "init",
                          "key": {
                            "type": "MemberExpression",
                            "start": 111,
                            "end": 130,
                            "object": {
                              "type": "Identifier",
                              "start": 111,
                              "end": 117,
                              "decorators": [],
                              "name": "Symbol",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "property": {
                              "type": "Identifier",
                              "start": 118,
                              "end": 130,
                              "decorators": [],
                              "name": "asyncDispose",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "optional": false,
                            "computed": false
                          },
                          "value": {
                            "type": "FunctionExpression",
                            "start": 131,
                            "end": 136,
                            "id": null,
                            "generator": false,
                            "async": true,
                            "declare": false,
                            "typeParameters": null,
                            "params": [],
                            "returnType": null,
                            "body": {
                              "type": "BlockStatement",
                              "start": 134,
                              "end": 136,
                              "body": []
                            },
                            "expression": false
                          },
                          "method": true,
                          "shorthand": false,
                          "computed": true,
                          "optional": false
                        },
                        {
                          "type": "Property",
                          "start": 138,
                          "end": 149,
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "start": 138,
                            "end": 143,
                            "decorators": [],
                            "name": "value",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "value": {
                            "type": "Literal",
                            "start": 145,
                            "end": 149,
                            "value": null,
                            "raw": "null"
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false
                        }
                      ]
                    },
                    "definite": false
                  }
                ],
                "declare": false
              }
            ]
          }
        ]
      },
      "expression": false
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 160,
      "end": 170,
      "declaration": null,
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```

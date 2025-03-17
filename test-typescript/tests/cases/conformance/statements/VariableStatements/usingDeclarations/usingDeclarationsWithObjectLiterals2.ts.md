__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 171,
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
          "declarations": [
            {
              "type": "VariableDeclarator",
              "start": 10,
              "end": 52,
              "id": {
                "type": "Identifier",
                "start": 10,
                "end": 11,
                "name": "_",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
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
                    "method": true,
                    "shorthand": false,
                    "computed": true,
                    "key": {
                      "type": "MemberExpression",
                      "start": 17,
                      "end": 31,
                      "object": {
                        "type": "Identifier",
                        "start": 17,
                        "end": 23,
                        "name": "Symbol",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 24,
                        "end": 31,
                        "name": "dispose",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "computed": false,
                      "optional": false
                    },
                    "value": {
                      "type": "FunctionExpression",
                      "start": 32,
                      "end": 37,
                      "id": null,
                      "expression": false,
                      "generator": false,
                      "async": false,
                      "params": [],
                      "body": {
                        "type": "BlockStatement",
                        "start": 35,
                        "end": 37,
                        "body": []
                      },
                      "declare": false,
                      "typeParameters": null,
                      "returnType": null
                    },
                    "kind": "init",
                    "optional": false
                  },
                  {
                    "type": "Property",
                    "start": 39,
                    "end": 50,
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 39,
                      "end": 44,
                      "name": "value",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "Literal",
                      "start": 46,
                      "end": 50,
                      "value": null,
                      "raw": "null"
                    },
                    "kind": "init",
                    "optional": false
                  }
                ]
              },
              "definite": false
            }
          ],
          "kind": "using",
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
        "name": "f",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": true,
      "params": [],
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
                "declarations": [
                  {
                    "type": "VariableDeclarator",
                    "start": 98,
                    "end": 151,
                    "id": {
                      "type": "Identifier",
                      "start": 98,
                      "end": 99,
                      "name": "_",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
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
                          "method": true,
                          "shorthand": false,
                          "computed": true,
                          "key": {
                            "type": "MemberExpression",
                            "start": 111,
                            "end": 130,
                            "object": {
                              "type": "Identifier",
                              "start": 111,
                              "end": 117,
                              "name": "Symbol",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "property": {
                              "type": "Identifier",
                              "start": 118,
                              "end": 130,
                              "name": "asyncDispose",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "computed": false,
                            "optional": false
                          },
                          "value": {
                            "type": "FunctionExpression",
                            "start": 131,
                            "end": 136,
                            "id": null,
                            "expression": false,
                            "generator": false,
                            "async": true,
                            "params": [],
                            "body": {
                              "type": "BlockStatement",
                              "start": 134,
                              "end": 136,
                              "body": []
                            },
                            "declare": false,
                            "typeParameters": null,
                            "returnType": null
                          },
                          "kind": "init",
                          "optional": false
                        },
                        {
                          "type": "Property",
                          "start": 138,
                          "end": 149,
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 138,
                            "end": 143,
                            "name": "value",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "value": {
                            "type": "Literal",
                            "start": 145,
                            "end": 149,
                            "value": null,
                            "raw": "null"
                          },
                          "kind": "init",
                          "optional": false
                        }
                      ]
                    },
                    "definite": false
                  }
                ],
                "kind": "await using",
                "declare": false
              }
            ]
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 160,
      "end": 170,
      "declaration": null,
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```

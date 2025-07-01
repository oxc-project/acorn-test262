__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "BlockStatement",
      "body": [
        {
          "type": "VariableDeclaration",
          "kind": "using",
          "declarations": [
            {
              "type": "VariableDeclarator",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "_",
                "optional": false,
                "typeAnnotation": null,
                "start": 10,
                "end": 11
              },
              "init": {
                "type": "ObjectExpression",
                "properties": [
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Symbol",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 17,
                        "end": 23
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "dispose",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 24,
                        "end": 31
                      },
                      "optional": false,
                      "computed": false,
                      "start": 17,
                      "end": 31
                    },
                    "value": {
                      "type": "FunctionExpression",
                      "id": null,
                      "generator": false,
                      "async": false,
                      "declare": false,
                      "typeParameters": null,
                      "params": [],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [],
                        "start": 35,
                        "end": 37
                      },
                      "expression": false,
                      "start": 32,
                      "end": 37
                    },
                    "method": true,
                    "shorthand": false,
                    "computed": true,
                    "optional": false,
                    "start": 16,
                    "end": 37
                  },
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "value",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 39,
                      "end": 44
                    },
                    "value": {
                      "type": "Literal",
                      "value": null,
                      "raw": "null",
                      "start": 46,
                      "end": 50
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 39,
                    "end": 50
                  }
                ],
                "start": 14,
                "end": 52
              },
              "definite": false,
              "start": 10,
              "end": 52
            }
          ],
          "declare": false,
          "start": 4,
          "end": 53
        }
      ],
      "start": 0,
      "end": 55
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f",
        "optional": false,
        "typeAnnotation": null,
        "start": 72,
        "end": 73
      },
      "generator": false,
      "async": true,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "BlockStatement",
            "body": [
              {
                "type": "VariableDeclaration",
                "kind": "await using",
                "declarations": [
                  {
                    "type": "VariableDeclarator",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "_",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 98,
                      "end": 99
                    },
                    "init": {
                      "type": "ObjectExpression",
                      "properties": [
                        {
                          "type": "Property",
                          "kind": "init",
                          "key": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Symbol",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 111,
                              "end": 117
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "asyncDispose",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 118,
                              "end": 130
                            },
                            "optional": false,
                            "computed": false,
                            "start": 111,
                            "end": 130
                          },
                          "value": {
                            "type": "FunctionExpression",
                            "id": null,
                            "generator": false,
                            "async": true,
                            "declare": false,
                            "typeParameters": null,
                            "params": [],
                            "returnType": null,
                            "body": {
                              "type": "BlockStatement",
                              "body": [],
                              "start": 134,
                              "end": 136
                            },
                            "expression": false,
                            "start": 131,
                            "end": 136
                          },
                          "method": true,
                          "shorthand": false,
                          "computed": true,
                          "optional": false,
                          "start": 104,
                          "end": 136
                        },
                        {
                          "type": "Property",
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "value",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 138,
                            "end": 143
                          },
                          "value": {
                            "type": "Literal",
                            "value": null,
                            "raw": "null",
                            "start": 145,
                            "end": 149
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 138,
                          "end": 149
                        }
                      ],
                      "start": 102,
                      "end": 151
                    },
                    "definite": false,
                    "start": 98,
                    "end": 151
                  }
                ],
                "declare": false,
                "start": 86,
                "end": 152
              }
            ],
            "start": 80,
            "end": 156
          }
        ],
        "start": 76,
        "end": 158
      },
      "expression": false,
      "start": 57,
      "end": 158
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": null,
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 160,
      "end": 170
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 170
}
```

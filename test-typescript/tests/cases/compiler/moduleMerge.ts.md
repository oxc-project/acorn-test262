moduleMerge.ts
```json
{
  "type": "Program",
  "start": 94,
  "end": 350,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 94,
      "end": 218,
      "body": {
        "type": "TSModuleBlock",
        "start": 103,
        "end": 218,
        "body": [
          {
            "type": "ClassDeclaration",
            "start": 109,
            "end": 216,
            "abstract": false,
            "body": {
              "type": "ClassBody",
              "start": 121,
              "end": 216,
              "body": [
                {
                  "type": "MethodDefinition",
                  "start": 131,
                  "end": 210,
                  "accessibility": "public",
                  "computed": false,
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "start": 138,
                    "end": 143,
                    "decorators": [],
                    "name": "Hello",
                    "optional": false
                  },
                  "kind": "method",
                  "optional": false,
                  "override": false,
                  "static": false,
                  "value": {
                    "type": "FunctionExpression",
                    "start": 143,
                    "end": 210,
                    "async": false,
                    "body": {
                      "type": "BlockStatement",
                      "start": 162,
                      "end": 210,
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "start": 176,
                          "end": 200,
                          "argument": {
                            "type": "Literal",
                            "start": 183,
                            "end": 199,
                            "raw": "\"from private B\"",
                            "value": "from private B"
                          }
                        }
                      ]
                    },
                    "declare": false,
                    "expression": false,
                    "generator": false,
                    "id": null,
                    "params": [],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 145,
                      "end": 153,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 147,
                        "end": 153
                      }
                    }
                  }
                }
              ]
            },
            "declare": false,
            "decorators": [],
            "id": {
              "type": "Identifier",
              "start": 115,
              "end": 116,
              "decorators": [],
              "name": "B",
              "optional": false
            },
            "implements": [],
            "superClass": null
          }
        ]
      },
      "declare": false,
      "global": false,
      "id": {
        "type": "Identifier",
        "start": 101,
        "end": 102,
        "decorators": [],
        "name": "A",
        "optional": false
      },
      "kind": "module"
    },
    {
      "type": "TSModuleDeclaration",
      "start": 220,
      "end": 350,
      "body": {
        "type": "TSModuleBlock",
        "start": 229,
        "end": 350,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 235,
            "end": 348,
            "attributes": [],
            "declaration": {
              "type": "ClassDeclaration",
              "start": 242,
              "end": 348,
              "abstract": false,
              "body": {
                "type": "ClassBody",
                "start": 254,
                "end": 348,
                "body": [
                  {
                    "type": "MethodDefinition",
                    "start": 264,
                    "end": 342,
                    "accessibility": "public",
                    "computed": false,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "start": 271,
                      "end": 276,
                      "decorators": [],
                      "name": "Hello",
                      "optional": false
                    },
                    "kind": "method",
                    "optional": false,
                    "override": false,
                    "static": false,
                    "value": {
                      "type": "FunctionExpression",
                      "start": 276,
                      "end": 342,
                      "async": false,
                      "body": {
                        "type": "BlockStatement",
                        "start": 295,
                        "end": 342,
                        "body": [
                          {
                            "type": "ReturnStatement",
                            "start": 309,
                            "end": 332,
                            "argument": {
                              "type": "Literal",
                              "start": 316,
                              "end": 331,
                              "raw": "\"from export B\"",
                              "value": "from export B"
                            }
                          }
                        ]
                      },
                      "declare": false,
                      "expression": false,
                      "generator": false,
                      "id": null,
                      "params": [],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "start": 278,
                        "end": 286,
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 280,
                          "end": 286
                        }
                      }
                    }
                  }
                ]
              },
              "declare": false,
              "decorators": [],
              "id": {
                "type": "Identifier",
                "start": 248,
                "end": 249,
                "decorators": [],
                "name": "B",
                "optional": false
              },
              "implements": [],
              "superClass": null
            },
            "exportKind": "value",
            "source": null,
            "specifiers": []
          }
        ]
      },
      "declare": false,
      "global": false,
      "id": {
        "type": "Identifier",
        "start": 227,
        "end": 228,
        "decorators": [],
        "name": "A",
        "optional": false
      },
      "kind": "module"
    }
  ],
  "sourceType": "script"
}
```

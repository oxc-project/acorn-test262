__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 395,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 229,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 13,
        "end": 229,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 19,
            "end": 28,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "PrivateIdentifier",
              "start": 19,
              "end": 23,
              "name": "foo"
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "value": {
              "type": "Literal",
              "start": 26,
              "end": 27,
              "raw": "3",
              "value": 3
            }
          },
          {
            "type": "PropertyDefinition",
            "start": 33,
            "end": 49,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "PrivateIdentifier",
              "start": 40,
              "end": 44,
              "name": "bar"
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": true,
            "value": {
              "type": "Literal",
              "start": 47,
              "end": 48,
              "raw": "5",
              "value": 5
            }
          },
          {
            "type": "MethodDefinition",
            "start": 54,
            "end": 227,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 54,
              "end": 70,
              "decorators": [],
              "name": "accessChildProps",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 70,
              "end": 227,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 73,
                "end": 227,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 83,
                    "end": 100,
                    "expression": {
                      "type": "MemberExpression",
                      "start": 83,
                      "end": 99,
                      "computed": false,
                      "object": {
                        "type": "NewExpression",
                        "start": 83,
                        "end": 94,
                        "arguments": [],
                        "callee": {
                          "type": "Identifier",
                          "start": 87,
                          "end": 92,
                          "decorators": [],
                          "name": "Child",
                          "optional": false
                        }
                      },
                      "optional": false,
                      "property": {
                        "type": "PrivateIdentifier",
                        "start": 95,
                        "end": 99,
                        "name": "foo"
                      }
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 184,
                    "end": 195,
                    "expression": {
                      "type": "MemberExpression",
                      "start": 184,
                      "end": 194,
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "start": 184,
                        "end": 189,
                        "decorators": [],
                        "name": "Child",
                        "optional": false
                      },
                      "optional": false,
                      "property": {
                        "type": "PrivateIdentifier",
                        "start": 190,
                        "end": 194,
                        "name": "bar"
                      }
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": []
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 12,
        "decorators": [],
        "name": "Parent",
        "optional": false
      },
      "implements": [],
      "superClass": null
    },
    {
      "type": "ClassDeclaration",
      "start": 231,
      "end": 394,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 258,
        "end": 394,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 264,
            "end": 277,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "PrivateIdentifier",
              "start": 264,
              "end": 268,
              "name": "foo"
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "value": {
              "type": "Literal",
              "start": 271,
              "end": 276,
              "raw": "\"foo\"",
              "value": "foo"
            }
          },
          {
            "type": "PropertyDefinition",
            "start": 367,
            "end": 380,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "PrivateIdentifier",
              "start": 367,
              "end": 371,
              "name": "bar"
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "value": {
              "type": "Literal",
              "start": 374,
              "end": 379,
              "raw": "\"bar\"",
              "value": "bar"
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 237,
        "end": 242,
        "decorators": [],
        "name": "Child",
        "optional": false
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 251,
        "end": 257,
        "decorators": [],
        "name": "Parent",
        "optional": false
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```

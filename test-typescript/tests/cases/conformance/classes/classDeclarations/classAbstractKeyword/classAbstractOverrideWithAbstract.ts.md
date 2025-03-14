classAbstractOverrideWithAbstract.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 271,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 24,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 8,
        "end": 24,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 14,
            "end": 22,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 14,
              "end": 17,
              "decorators": [],
              "name": "foo",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 17,
              "end": 22,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 20,
                "end": 22,
                "body": []
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
        "end": 7,
        "decorators": [],
        "name": "A",
        "optional": false
      },
      "implements": [],
      "superClass": null
    },
    {
      "type": "ClassDeclaration",
      "start": 26,
      "end": 76,
      "abstract": true,
      "body": {
        "type": "ClassBody",
        "start": 53,
        "end": 76,
        "body": [
          {
            "type": "TSAbstractMethodDefinition",
            "start": 59,
            "end": 74,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 68,
              "end": 71,
              "decorators": [],
              "name": "foo",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 71,
              "end": 74,
              "async": false,
              "body": null,
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
        "start": 41,
        "end": 42,
        "decorators": [],
        "name": "B",
        "optional": false
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 51,
        "end": 52,
        "decorators": [],
        "name": "A",
        "optional": false
      }
    },
    {
      "type": "ClassDeclaration",
      "start": 78,
      "end": 132,
      "abstract": true,
      "body": {
        "type": "ClassBody",
        "start": 96,
        "end": 132,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 102,
            "end": 110,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 102,
              "end": 105,
              "decorators": [],
              "name": "foo",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 105,
              "end": 110,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 108,
                "end": 110,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": []
            }
          },
          {
            "type": "TSAbstractMethodDefinition",
            "start": 115,
            "end": 130,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 124,
              "end": 127,
              "decorators": [],
              "name": "bar",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 127,
              "end": 130,
              "async": false,
              "body": null,
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
        "start": 93,
        "end": 95,
        "decorators": [],
        "name": "AA",
        "optional": false
      },
      "implements": [],
      "superClass": null
    },
    {
      "type": "ClassDeclaration",
      "start": 134,
      "end": 200,
      "abstract": true,
      "body": {
        "type": "ClassBody",
        "start": 163,
        "end": 200,
        "body": [
          {
            "type": "TSAbstractMethodDefinition",
            "start": 169,
            "end": 184,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 178,
              "end": 181,
              "decorators": [],
              "name": "foo",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 181,
              "end": 184,
              "async": false,
              "body": null,
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": []
            }
          },
          {
            "type": "MethodDefinition",
            "start": 189,
            "end": 198,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 189,
              "end": 192,
              "decorators": [],
              "name": "bar",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 193,
              "end": 198,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 196,
                "end": 198,
                "body": []
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
        "start": 149,
        "end": 151,
        "decorators": [],
        "name": "BB",
        "optional": false
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 160,
        "end": 162,
        "decorators": [],
        "name": "AA",
        "optional": false
      }
    },
    {
      "type": "ClassDeclaration",
      "start": 202,
      "end": 224,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 222,
        "end": 224,
        "body": []
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 208,
        "end": 210,
        "decorators": [],
        "name": "CC",
        "optional": false
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 219,
        "end": 221,
        "decorators": [],
        "name": "BB",
        "optional": false
      }
    },
    {
      "type": "ClassDeclaration",
      "start": 235,
      "end": 271,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 255,
        "end": 271,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 261,
            "end": 269,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 261,
              "end": 264,
              "decorators": [],
              "name": "foo",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 264,
              "end": 269,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 267,
                "end": 269,
                "body": []
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
        "start": 241,
        "end": 243,
        "decorators": [],
        "name": "DD",
        "optional": false
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 252,
        "end": 254,
        "decorators": [],
        "name": "BB",
        "optional": false
      }
    }
  ],
  "sourceType": "script"
}
```

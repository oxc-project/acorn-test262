__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 26,
  "end": 413,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 26,
      "end": 57,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 41,
        "end": 57,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 45,
            "end": 55,
            "argument": {
              "type": "Literal",
              "start": 52,
              "end": 54,
              "raw": "42",
              "value": 42,
              "regex": null,
              "bigint": null
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 35,
        "end": 38,
        "decorators": [],
        "name": "fn1",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 85,
      "end": 119,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 100,
        "end": 119,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 104,
            "end": 117,
            "argument": {
              "type": "Literal",
              "start": 111,
              "end": 116,
              "raw": "\"foo\"",
              "value": "foo",
              "regex": null,
              "bigint": null
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 94,
        "end": 97,
        "decorators": [],
        "name": "fn2",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 158,
      "end": 193,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 176,
        "end": 193,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 180,
            "end": 191,
            "argument": {
              "type": "Identifier",
              "start": 187,
              "end": 190,
              "decorators": [],
              "name": "arg",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 167,
        "end": 170,
        "decorators": [],
        "name": "fn3",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 171,
          "end": 174,
          "decorators": [],
          "name": "arg",
          "optional": false,
          "typeAnnotation": null
        }
      ],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "VariableDeclaration",
      "start": 263,
      "end": 302,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 269,
          "end": 301,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 269,
            "end": 273,
            "decorators": [],
            "name": "obj1",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ObjectExpression",
            "start": 276,
            "end": 301,
            "properties": [
              {
                "type": "Property",
                "start": 278,
                "end": 289,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 278,
                  "end": 282,
                  "decorators": [],
                  "name": "type",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 284,
                  "end": 289,
                  "raw": "\"foo\"",
                  "value": "foo",
                  "regex": null,
                  "bigint": null
                }
              },
              {
                "type": "Property",
                "start": 291,
                "end": 299,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 291,
                  "end": 295,
                  "decorators": [],
                  "name": "prop",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 297,
                  "end": 299,
                  "raw": "10",
                  "value": 10,
                  "regex": null,
                  "bigint": null
                }
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 372,
      "end": 413,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 378,
          "end": 412,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 378,
            "end": 382,
            "decorators": [],
            "name": "obj2",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ObjectExpression",
            "start": 385,
            "end": 412,
            "properties": [
              {
                "type": "Property",
                "start": 387,
                "end": 400,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 387,
                  "end": 391,
                  "decorators": [],
                  "name": "type",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 393,
                  "end": 400,
                  "raw": "\"other\"",
                  "value": "other",
                  "regex": null,
                  "bigint": null
                }
              },
              {
                "type": "Property",
                "start": 402,
                "end": 410,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 402,
                  "end": 406,
                  "decorators": [],
                  "name": "prop",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 408,
                  "end": 410,
                  "raw": "10",
                  "value": 10,
                  "regex": null,
                  "bigint": null
                }
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "const"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```

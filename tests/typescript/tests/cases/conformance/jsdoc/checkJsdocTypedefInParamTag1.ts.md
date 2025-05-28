__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 178,
  "end": 661,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 178,
      "end": 212,
      "id": {
        "type": "Identifier",
        "start": 187,
        "end": 190,
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 191,
          "end": 195,
          "decorators": [],
          "name": "opts",
          "optional": false,
          "typeAnnotation": null
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 197,
        "end": 212,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 203,
            "end": 210,
            "expression": {
              "type": "MemberExpression",
              "start": 203,
              "end": 209,
              "object": {
                "type": "Identifier",
                "start": 203,
                "end": 207,
                "decorators": [],
                "name": "opts",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 208,
                "end": 209,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "directive": null
          }
        ]
      },
      "expression": false
    },
    {
      "type": "ExpressionStatement",
      "start": 214,
      "end": 230,
      "expression": {
        "type": "CallExpression",
        "start": 214,
        "end": 229,
        "callee": {
          "type": "Identifier",
          "start": 214,
          "end": 217,
          "decorators": [],
          "name": "foo",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ObjectExpression",
            "start": 218,
            "end": 228,
            "properties": [
              {
                "type": "Property",
                "start": 219,
                "end": 227,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 219,
                  "end": 220,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "Literal",
                  "start": 222,
                  "end": 227,
                  "value": "abc",
                  "raw": "'abc'"
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              }
            ]
          }
        ],
        "optional": false
      },
      "directive": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 369,
      "end": 411,
      "id": {
        "type": "Identifier",
        "start": 378,
        "end": 382,
        "decorators": [],
        "name": "foo1",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 383,
          "end": 387,
          "decorators": [],
          "name": "opts",
          "optional": false,
          "typeAnnotation": null
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 389,
        "end": 411,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 395,
            "end": 409,
            "expression": {
              "type": "MemberExpression",
              "start": 395,
              "end": 408,
              "object": {
                "type": "Identifier",
                "start": 395,
                "end": 399,
                "decorators": [],
                "name": "opts",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 400,
                "end": 408,
                "decorators": [],
                "name": "anotherX",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "directive": null
          }
        ]
      },
      "expression": false
    },
    {
      "type": "ExpressionStatement",
      "start": 413,
      "end": 439,
      "expression": {
        "type": "CallExpression",
        "start": 413,
        "end": 438,
        "callee": {
          "type": "Identifier",
          "start": 413,
          "end": 417,
          "decorators": [],
          "name": "foo1",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ObjectExpression",
            "start": 418,
            "end": 437,
            "properties": [
              {
                "type": "Property",
                "start": 419,
                "end": 436,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 419,
                  "end": 427,
                  "decorators": [],
                  "name": "anotherX",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "Literal",
                  "start": 429,
                  "end": 436,
                  "value": "world",
                  "raw": "\"world\""
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              }
            ]
          }
        ],
        "optional": false
      },
      "directive": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 608,
      "end": 643,
      "id": {
        "type": "Identifier",
        "start": 617,
        "end": 621,
        "decorators": [],
        "name": "foo2",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 622,
          "end": 626,
          "decorators": [],
          "name": "opts",
          "optional": false,
          "typeAnnotation": null
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 628,
        "end": 643,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 634,
            "end": 641,
            "expression": {
              "type": "MemberExpression",
              "start": 634,
              "end": 640,
              "object": {
                "type": "Identifier",
                "start": 634,
                "end": 638,
                "decorators": [],
                "name": "opts",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 639,
                "end": 640,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "directive": null
          }
        ]
      },
      "expression": false
    },
    {
      "type": "ExpressionStatement",
      "start": 644,
      "end": 661,
      "expression": {
        "type": "CallExpression",
        "start": 644,
        "end": 660,
        "callee": {
          "type": "Identifier",
          "start": 644,
          "end": 648,
          "decorators": [],
          "name": "foo2",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ObjectExpression",
            "start": 649,
            "end": 659,
            "properties": [
              {
                "type": "Property",
                "start": 650,
                "end": 658,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 650,
                  "end": 651,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "Literal",
                  "start": 653,
                  "end": 658,
                  "value": "abc",
                  "raw": "'abc'"
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              }
            ]
          }
        ],
        "optional": false
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```

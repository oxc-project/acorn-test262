__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "fn1",
        "optional": false,
        "typeAnnotation": null,
        "start": 35,
        "end": 38
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Literal",
              "value": 42,
              "raw": "42",
              "start": 52,
              "end": 54
            },
            "start": 45,
            "end": 55
          }
        ],
        "start": 41,
        "end": 57
      },
      "expression": false,
      "start": 26,
      "end": 57
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "fn2",
        "optional": false,
        "typeAnnotation": null,
        "start": 94,
        "end": 97
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Literal",
              "value": "foo",
              "raw": "\"foo\"",
              "start": 111,
              "end": 116
            },
            "start": 104,
            "end": 117
          }
        ],
        "start": 100,
        "end": 119
      },
      "expression": false,
      "start": 85,
      "end": 119
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "fn3",
        "optional": false,
        "typeAnnotation": null,
        "start": 167,
        "end": 170
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "arg",
          "optional": false,
          "typeAnnotation": null,
          "start": 171,
          "end": 174
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "arg",
              "optional": false,
              "typeAnnotation": null,
              "start": 187,
              "end": 190
            },
            "start": 180,
            "end": 191
          }
        ],
        "start": 176,
        "end": 193
      },
      "expression": false,
      "start": 158,
      "end": 193
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "obj1",
            "optional": false,
            "typeAnnotation": null,
            "start": 269,
            "end": 273
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "type",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 278,
                  "end": 282
                },
                "value": {
                  "type": "Literal",
                  "value": "foo",
                  "raw": "\"foo\"",
                  "start": 284,
                  "end": 289
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 278,
                "end": 289
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "prop",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 291,
                  "end": 295
                },
                "value": {
                  "type": "Literal",
                  "value": 10,
                  "raw": "10",
                  "start": 297,
                  "end": 299
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 291,
                "end": 299
              }
            ],
            "start": 276,
            "end": 301
          },
          "definite": false,
          "start": 269,
          "end": 301
        }
      ],
      "declare": false,
      "start": 263,
      "end": 302
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "obj2",
            "optional": false,
            "typeAnnotation": null,
            "start": 378,
            "end": 382
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "type",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 387,
                  "end": 391
                },
                "value": {
                  "type": "Literal",
                  "value": "other",
                  "raw": "\"other\"",
                  "start": 393,
                  "end": 400
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 387,
                "end": 400
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "prop",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 402,
                  "end": 406
                },
                "value": {
                  "type": "Literal",
                  "value": 10,
                  "raw": "10",
                  "start": 408,
                  "end": 410
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 402,
                "end": 410
              }
            ],
            "start": 385,
            "end": 412
          },
          "definite": false,
          "start": 378,
          "end": 412
        }
      ],
      "declare": false,
      "start": 372,
      "end": 413
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 26,
  "end": 413
}
```

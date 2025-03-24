__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 26,
  "end": 390,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 26,
      "end": 45,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 42,
        "end": 45,
        "body": []
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 35,
        "end": 38,
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 39,
          "end": 40,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null
        }
      ],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "EmptyStatement",
      "start": 45,
      "end": 46
    },
    {
      "type": "FunctionDeclaration",
      "start": 47,
      "end": 77,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 74,
        "end": 77,
        "body": []
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 56,
        "end": 59,
        "decorators": [],
        "name": "bar",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 60,
          "end": 69,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 61,
            "end": 69,
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 63,
              "end": 69
            }
          }
        },
        {
          "type": "Identifier",
          "start": 71,
          "end": 72,
          "decorators": [],
          "name": "y",
          "optional": false,
          "typeAnnotation": null
        }
      ],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "EmptyStatement",
      "start": 77,
      "end": 78
    },
    {
      "type": "FunctionDeclaration",
      "start": 113,
      "end": 140,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 137,
        "end": 140,
        "body": []
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 122,
        "end": 127,
        "decorators": [],
        "name": "func2",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 128,
          "end": 129,
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null
        },
        {
          "type": "Identifier",
          "start": 131,
          "end": 132,
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": null
        },
        {
          "type": "Identifier",
          "start": 134,
          "end": 135,
          "decorators": [],
          "name": "c",
          "optional": false,
          "typeAnnotation": null
        }
      ],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "EmptyStatement",
      "start": 140,
      "end": 141
    },
    {
      "type": "FunctionDeclaration",
      "start": 166,
      "end": 193,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 190,
        "end": 193,
        "body": []
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 175,
        "end": 180,
        "decorators": [],
        "name": "func3",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "RestElement",
          "start": 181,
          "end": 188,
          "argument": {
            "type": "Identifier",
            "start": 184,
            "end": 188,
            "decorators": [],
            "name": "args",
            "optional": false,
            "typeAnnotation": null
          },
          "decorators": [],
          "optional": false,
          "typeAnnotation": null,
          "value": null
        }
      ],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "EmptyStatement",
      "start": 193,
      "end": 194
    },
    {
      "type": "FunctionDeclaration",
      "start": 219,
      "end": 260,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 257,
        "end": 260,
        "body": []
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 228,
        "end": 233,
        "decorators": [],
        "name": "func4",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "AssignmentPattern",
          "start": 234,
          "end": 241,
          "decorators": [],
          "left": {
            "type": "Identifier",
            "start": 234,
            "end": 235,
            "decorators": [],
            "name": "z",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "right": {
            "type": "Literal",
            "start": 237,
            "end": 241,
            "raw": "null",
            "value": null
          },
          "typeAnnotation": null
        },
        {
          "type": "AssignmentPattern",
          "start": 243,
          "end": 255,
          "decorators": [],
          "left": {
            "type": "Identifier",
            "start": 243,
            "end": 244,
            "decorators": [],
            "name": "w",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "right": {
            "type": "Identifier",
            "start": 246,
            "end": 255,
            "decorators": [],
            "name": "undefined",
            "optional": false,
            "typeAnnotation": null
          },
          "typeAnnotation": null
        }
      ],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "EmptyStatement",
      "start": 260,
      "end": 261
    },
    {
      "type": "FunctionDeclaration",
      "start": 311,
      "end": 344,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 341,
        "end": 344,
        "body": []
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 320,
        "end": 328,
        "decorators": [],
        "name": "noError1",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "AssignmentPattern",
          "start": 329,
          "end": 333,
          "decorators": [],
          "left": {
            "type": "Identifier",
            "start": 329,
            "end": 330,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "right": {
            "type": "Literal",
            "start": 332,
            "end": 333,
            "raw": "3",
            "value": 3
          },
          "typeAnnotation": null
        },
        {
          "type": "AssignmentPattern",
          "start": 335,
          "end": 339,
          "decorators": [],
          "left": {
            "type": "Identifier",
            "start": 335,
            "end": 336,
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "right": {
            "type": "Literal",
            "start": 338,
            "end": 339,
            "raw": "2",
            "value": 2
          },
          "typeAnnotation": null
        }
      ],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "EmptyStatement",
      "start": 344,
      "end": 345
    },
    {
      "type": "FunctionDeclaration",
      "start": 346,
      "end": 389,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 386,
        "end": 389,
        "body": []
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 355,
        "end": 363,
        "decorators": [],
        "name": "noError2",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 364,
          "end": 373,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 365,
            "end": 373,
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 367,
              "end": 373
            }
          }
        },
        {
          "type": "Identifier",
          "start": 375,
          "end": 384,
          "decorators": [],
          "name": "y",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 376,
            "end": 384,
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 378,
              "end": 384
            }
          }
        }
      ],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "EmptyStatement",
      "start": 389,
      "end": 390
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```

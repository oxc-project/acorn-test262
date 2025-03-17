__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 26,
  "end": 391,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 26,
      "end": 45,
      "id": {
        "type": "Identifier",
        "start": 35,
        "end": 38,
        "name": "foo",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 39,
          "end": 40,
          "name": "x",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 42,
        "end": 45,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
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
      "id": {
        "type": "Identifier",
        "start": 56,
        "end": 59,
        "name": "bar",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 60,
          "end": 69,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 61,
            "end": 69,
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 63,
              "end": 69
            }
          },
          "decorators": [],
          "optional": false
        },
        {
          "type": "Identifier",
          "start": 71,
          "end": 72,
          "name": "y",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 74,
        "end": 77,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
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
      "id": {
        "type": "Identifier",
        "start": 122,
        "end": 127,
        "name": "func2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 128,
          "end": 129,
          "name": "a",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        {
          "type": "Identifier",
          "start": 131,
          "end": 132,
          "name": "b",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        {
          "type": "Identifier",
          "start": 134,
          "end": 135,
          "name": "c",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 137,
        "end": 140,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
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
      "id": {
        "type": "Identifier",
        "start": 175,
        "end": 180,
        "name": "func3",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "RestElement",
          "start": 181,
          "end": 188,
          "argument": {
            "type": "Identifier",
            "start": 184,
            "end": 188,
            "name": "args",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "decorators": [],
          "optional": false,
          "typeAnnotation": null,
          "value": null
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 190,
        "end": 193,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
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
      "id": {
        "type": "Identifier",
        "start": 228,
        "end": 233,
        "name": "func4",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "AssignmentPattern",
          "start": 234,
          "end": 241,
          "left": {
            "type": "Identifier",
            "start": 234,
            "end": 235,
            "name": "z",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "right": {
            "type": "Literal",
            "start": 237,
            "end": 241,
            "value": null,
            "raw": "null"
          },
          "decorators": [],
          "optional": false,
          "typeAnnotation": null
        },
        {
          "type": "AssignmentPattern",
          "start": 243,
          "end": 255,
          "left": {
            "type": "Identifier",
            "start": 243,
            "end": 244,
            "name": "w",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "right": {
            "type": "Identifier",
            "start": 246,
            "end": 255,
            "name": "undefined",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "decorators": [],
          "optional": false,
          "typeAnnotation": null
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 257,
        "end": 260,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
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
      "id": {
        "type": "Identifier",
        "start": 320,
        "end": 328,
        "name": "noError1",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "AssignmentPattern",
          "start": 329,
          "end": 333,
          "left": {
            "type": "Identifier",
            "start": 329,
            "end": 330,
            "name": "x",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "right": {
            "type": "Literal",
            "start": 332,
            "end": 333,
            "value": 3,
            "raw": "3"
          },
          "decorators": [],
          "optional": false,
          "typeAnnotation": null
        },
        {
          "type": "AssignmentPattern",
          "start": 335,
          "end": 339,
          "left": {
            "type": "Identifier",
            "start": 335,
            "end": 336,
            "name": "y",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "right": {
            "type": "Literal",
            "start": 338,
            "end": 339,
            "value": 2,
            "raw": "2"
          },
          "decorators": [],
          "optional": false,
          "typeAnnotation": null
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 341,
        "end": 344,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
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
      "id": {
        "type": "Identifier",
        "start": 355,
        "end": 363,
        "name": "noError2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 364,
          "end": 373,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 365,
            "end": 373,
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 367,
              "end": 373
            }
          },
          "decorators": [],
          "optional": false
        },
        {
          "type": "Identifier",
          "start": 375,
          "end": 384,
          "name": "y",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 376,
            "end": 384,
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 378,
              "end": 384
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 386,
        "end": 389,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
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
